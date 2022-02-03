/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// fake database of tweets aka obj
const dataURL = "http://localhost:8080/tweets";

// creates single tweet html
const createTweetElement = (tweet) =>{
  const { user, content, created_at } = tweet;
  const tweetElement = `
    <article class="tweet">
      <header>
        <span><img src="${user.avatars}">${user.name}</span>
        <div class ="username">
          <span>${user.handle}</span>
        </div>
      </header>
      <p>${content.text}</p>
      <footer>
        ${timeago.format(created_at)}
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
   `;
  return tweetElement;
};

 

// renders all ze tweets
const renderTweets = (tweetArr) => {
  for (let tweet of tweetArr) {
    const tweetElement = createTweetElement(tweet);
    $('.all-tweets').prepend(tweetElement);
  }
};

$(() => {

  // trying to get data out of /tweets
  $.get(dataURL, function(data) {
    renderTweets(data);
  });
// stops tweet event checks for errors and posts it to database aka object 
  $(".tweetIt").submit(function(event) {
    event.preventDefault();

    if ($("#tweet-text").val().length > 140) {
      $(".errorMsg").html(`<span> 🚫⚠️🙅🏻‍♂️ Please use less then the 140 characthers :/ 🙅🏻‍♂️⚠🚫 </span`);
      $('.errorMsg').slideDown("slow");
      return;
      // return alert("get the frig out of here to many chars")
    }

    if (!$("#tweet-text").val().trim()) {
      $(".errorMsg").html(`<span> 🚫⚠️🙅🏻‍♂️ How about typing something in before tweeting 🙅🏻‍♂️⚠️🚫 </span>`);
      $('.errorMsg').slideDown("slow");
      return;
      // return alert("learn to type you imbredacile")
    }

    //takes dataurl as data and turns it into an array and returns the last tweet 
    // posts last tweet 
    $.post("/tweets", $(this).serialize(), function() {
      $.get(dataURL, function(data) {
        renderTweets([data[data.length - 1]]);
      });
    });
    
    
  });

});

