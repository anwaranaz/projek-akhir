function validateEmail() {
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        sendMessage("Email is Required", "emailHelp", "red");
        return false;
    }
    if (!email.match(/[\w]+@[a-z.]+/)) {
        sendMessage("Email Address Invalid", "emailHelp", "red");
        return false;
    }
    sendMessage("Valid Email", "emailHelp", "green");
    return true;

}

function validateMessage() {
    var msg = document.getElementById("message").value;
    if (msg.length == 0) {
        sendMessage("Message is Required", "messageHelp", "red");
        return false;
    }
    sendMessage("Good !", "messageHelp", "green");
    return true;
}

function sendMessage(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}
