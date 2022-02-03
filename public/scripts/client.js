/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 const dataURL = "http://localhost:8080/tweets"


  const createTweetElement = (tweet) =>{
    const { user, content, created_at } = tweet
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
    return tweetElement
  }

 


  const renderTweets = (tweetArr) => {
    for (let tweet of tweetArr) {
      const tweetElement = createTweetElement(tweet)
      $('.all-tweets').prepend(tweetElement)
    }
  }

$(() => {

  // trying to get data out of /tweets
  $.get(dataURL, function(data) {
    $( ".tweetIt" ).submit(function( event ) {
      event.preventDefault();
      $.post("/tweets", $(this).serialize())
    }); 
    renderTweets(data);
  })



})

