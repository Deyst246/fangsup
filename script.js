
function signUp() {
 var email = document.getElementById("emailinput").value

document.getElementById("signupmessage").innerHTML = "Thank you for signing up to Fangs Up Exotics"
  
 var notification = document.getElementById("notificationchk").checked;

if(notification){
document.getElementById("notificationmsg").innerHTML = "You will recieve Emails with deals and updates about Fangs Up Exotics"
}
}
