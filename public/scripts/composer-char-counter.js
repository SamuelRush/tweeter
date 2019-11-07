$(document).ready(() => {
  let xTriggered = 0;
  $('.tweetInput__new-tweet').keyup((e) => {
    const $newTweet = $('.tweetInput__new-tweet')
    const inputValue = $newTweet.val();
    xTriggered = 140 - inputValue.length;
    if (xTriggered < 0) {
      $('.counter__new-tweet').addClass('red');
    }
    if (xTriggered >= 0) {
      $('.counter__new-tweet').removeClass('red')
    }
    $('.counter__new-tweet').text(xTriggered);
  });

});