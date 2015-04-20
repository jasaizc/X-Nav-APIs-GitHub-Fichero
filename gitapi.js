var token
var github
function getToken() {
    token = $("#token").val();
    console.log (token);
    github = new Github({
  token: token,
	auth: "oauth"
    });
}


$(document).ready(function() {
    $("button").click(getToken);
    
});