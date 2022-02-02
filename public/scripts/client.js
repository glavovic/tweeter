/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const dataURL = "http://localhost:8080/tweets"


  const appendTweet = (tweet) =>{
    const layout = `
    <article class="tweet">
      <header>
        <span><img src="${tweet.user.avatars}">${tweet.user.name}</span>
        <div class ="username">
          <span>${tweet.user.handle}</span>
        </div>
      </header>
      <p>${tweet.content.text}</p>
      <footer>
        ${tweet.created_at}
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
   `;
   $('.all-tweets').append(layout)
  }


  const appendMultipleTweets = (tweetArr) => {
    for (let tweet of tweetArr) {
      appendTweet(tweet);
    }
  }

  
  // trying to get data out of /tweets
  $.get(dataURL).then((data) => {
    appendMultipleTweets(data);
  })