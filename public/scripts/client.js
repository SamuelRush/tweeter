/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

  function createTweetElement(tweetData){
    let dateNow = Date.now();
    let dateCreated = tweetData.created_at;
    let seconds = Math.floor((dateNow - (dateCreated))/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);

    //hours = hours-(days*24);
    //minutes = minutes-(days*24*60)-(hours*60);
    //seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
  return `
    <article>
    <h3>
      <p> <img class= "profPic__old-tweet" src ="${tweetData.user.avatars}"> ${tweetData.user.name} <span class = "username__old-tweet"> ${tweetData.user.handle}</span></p>
    </h3>
    <p class="tweet__old-tweet">${tweetData.content.text}<br></p>
    <footer>
      <p class="timeago__old-tweet">${days} days ago
        <span class="cornerpix__old-tweet">
          <i class='fa fa-flag'></i>
          <i class='fa fa-retweet'></i>
          <i class='fa fa-heart'></i>
        </span>
      </p>
    </footer>
    </article>
    <br>`
  }

function renderTweets(data){
  data.forEach((tweet) => {
    console.log(tweet)
    $('.tweetHolder__old-tweet').append(createTweetElement(tweet))
  })
}

renderTweets(data);
