/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

function createTweetElement(tweetData) {
  let dateNow = Date.now();
  let dateCreated = tweetData.created_at;
  let seconds = Math.floor((dateNow - (dateCreated)) / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let timePeriod = "";
  let amtTime = 0;

  if (seconds > 60) {
    if (minutes > 60) {
      if (hours > 24) {
        timePeriod = "days";
        amtTime = days;
      } else {
        timePeriod = "hours";
        amtTime = hours;
      }
    } else {
      timePeriod = "minutes";
      amtTime = minutes;
    }
  } else {
    timePeriod = "seconds";
    amtTime = seconds;
  }
  
  return `
  <article>
  <h3>
    <p> <img class= "profPic__old-tweet" src ="${tweetData.user.avatars}"> ${tweetData.user.name} <span class = "username__old-tweet"> ${tweetData.user.handle}</span></p>
  </h3>
  <p class="tweet__old-tweet">${escape(tweetData.content.text)}<br></p>
  <footer>
    <p class="timeago__old-tweet">${amtTime} ${timePeriod} ago
      <span class="cornerpix__old-tweet">
        <i class='fa fa-flag'></i>
        <i class='fa fa-retweet'></i>
        <i class='fa fa-heart'></i>
      </span>
    </p>
  </footer>
  </article>
  <br>`;
}

function renderTweets(data) {
  $('.tweetHolder__old-tweet').remove();
  $('.placeholder').append(`
  <section class = "tweetHolder__old-tweet">
  </section>`);
  $('.errorAlert').text("");
  data.forEach((tweet) => {
    $('.tweetHolder__old-tweet').prepend(createTweetElement(tweet));
  });
}
const loadTweets = function() {
  $.ajax('http://localhost:8080/tweets', { method: 'GET' })
    .then(renderTweets);
};

$(document).ready(function() {
  loadTweets();
  $('.new-tweet__new-tweet').hide();
  $('.tweetInput__new-tweet').keydown(function(e) {
    let key = e.which;
    if (key === 13) {
      $('#formSubmission').submit();
    }
  });
  $('#formSubmission').submit(function(e) {
    e.preventDefault();
    const $newTweet = $('.tweetInput__new-tweet');
    const inputValue = $newTweet.val();
    if (inputValue.trim() === "" || inputValue.trim() === null || inputValue.length > 140) {
      if (inputValue.length > 140) {
        $('.errorAlert').text("Tweet is too long...");
      } else {
        $('.errorAlert').text("There is no tweet to post!");
      }
    } else {
      console.log('Button clicked, performing ajax call...');
      $.post(`http://localhost:8080/tweets`, $(this).serialize(), (post) => {
        let newName = $('.header__nameID');
        let newText = this.text;
        post.user = newName;
        post.text = newText;
        loadTweets();
        $('.tweetInput__new-tweet').val("");
        $('.counter__new-tweet').text("140");
      });
    }
  });
});

//scroll up button
const scrollToTopButton = document.getElementById('js-top');
const scrollFunc = () => {
  let y = window.scrollY;
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
};