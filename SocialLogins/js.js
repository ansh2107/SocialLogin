
function(){

    $("#fblogin").click(function(){

            var ref = new Firebase("https://brilliant-torch-9921.firebaseio.com/?page=Auth");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        // the access token will allow us to make Open Graph API calls
        console.log(authData.facebook.accessToken);
      }
    }, {
      scope: "email,user_likes" // the permissions requested
    });


});

}


$(function(){

    $("#googlelogin").click(function(){

            var ref = new Firebase("https://brilliant-torch-9921.firebaseio.com/?page=Auth");
   ref.authWithOAuthPopup("google", function(error, authData) { /* Your Code */ }, {
  remember: "sessionOnly",
  scope: "email"
});


});

});




$(function(){

    $("#twitterlogin").click(function(){

            var ref = new Firebase("https://brilliant-torch-9921.firebaseio.com/?page=Auth");
   ref.authWithOAuthPopup("twitter", function(error, authData) { /* Your Code */ }, {
  remember: "sessionOnly",
  scope: "email"
});


});

});




$(function(){

    $("#githublogin").click(function(){

            var ref = new Firebase("https://brilliant-torch-9921.firebaseio.com/?page=Auth");
   ref.authWithOAuthPopup("github", function(error, authData) { /* Your Code */ }, {
  remember: "sessionOnly",
  scope: "email"
});


});

});
