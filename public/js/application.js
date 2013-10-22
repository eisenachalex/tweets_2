$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var twitter = this.tweet.value;
    $(".container").html("Your tweet is being twat")
    $.post("/", {tweet: twitter }, function(response) {
      $(".container").html("You just tweeted...<br/>" + twitter);
    })
  })
});
