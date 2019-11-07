$(document).ready(function() {
  $('.arrow').on('click', function(e){
    e.preventDefault();
    $('.new-tweet__new-tweet').toggle()
    $('.tweetInput__new-tweet').focus()
  });
});