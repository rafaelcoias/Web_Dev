var menuList = document.getElementById("menuList");

menuList.style.display = "none";

function openmenu() {
    var menuIcon = document.getElementById("menu-button");

    if (menuList.style.display == "none") {
        menuList.style.display = "block"; 
    }
    else {
        menuList.style.display = "none";
    }
}

function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var emailMessage = document.getElementById('message').value;
    var body = 'Name: ' + name + '<br><br>Email: ' + email + '<br><br>Subject: ' + subject + '<br><br>Message: ' + emailMessage; 

    var error = '';           

    if (name === '' || name == null) {
        error = error + 'Name is required.\n';
        document.getElementById('name').style.border = 'solid 2px rgb(255, 100, 100)';
    }
    else
        document.getElementById('name').style.border = 'none';
    if (email === '' || email == null) {
        error = error + 'Email is required.\n';
        document.getElementById('email').style.border = 'solid 2px rgb(255, 100, 100)';
    }
    else
        document.getElementById('email').style.border = 'none';
    if (emailMessage === '' || emailMessage == null) {
        error = error + 'Message is required.\n';
        document.getElementById('message').style.border = 'solid 2px rgb(255, 100, 100)';
    }
    else
        document.getElementById('message').style.border = 'none';
    if (error != '') {
        alert(error);
        return false;
    }

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rafaelmsppcoias@gmail.com",
        Password : "D00C070B58220B8F6E9B3DF22A73A23251D1",
        To : 'rafaelmsppcoias@gmail.com',
        From : "rafaelmsppcoias@gmail.com",
        Subject : subject,
        Body : body
    })
    alert("Email Sent Succesfuly !");
    reset();
}