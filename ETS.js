
var buttonContact = document.getElementById("buttonContact");




function formValidation() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    let message = document.getElementById("message");
    let letters = /^[A-Za-z\s]+$/;
    if (name.value == "") {
      let alert = document.getElementById("name-alert");
      alert.style.display = "block";
      setTimeout(function () {
        alert.style.display = "none";
      }, 2000);
      name.focus();
      return false;
    }
  
    if (name.value.length < 3) {
      let alert = document.getElementById("name-length-alert");
      alert.style.display = "block";
      setTimeout(function () {
        alert.style.display = "none";
      }, 2000);
      name.focus();
      return false;
    }
  
    if (!name.value.match(letters)) {
      name.value = "";
      let alert = document.getElementById("name-character-alert");
      alert.style.display = "block";
      setTimeout(function () {
        alert.style.display = "none";
      }, 2000);
      name.focus();
      return false;
    }
    if (email.value == "") {
      let alert = document.getElementById("email-alert");
      alert.style.display = "block";
      setTimeout(function () {
        alert.style.display = "none";
      }, 2000);
      email.focus();
      return false;
    }
  
    if (number.value == "") {
      let alert = document.getElementById("number-alert");
      alert.style.display = "block";
      setTimeout(function () {
        alert.style.display = "none";
      }, 2000);
      number.focus();
      return false;
    }
  
    if (isNaN(number.value) == true) {
      let alert = document.getElementById("number-character-alert");
      alert.style.display = "block";
      number.value = "";
      setTimeout(function () {
        alert.style.display = "none";
      }, 2000);
      
      number.focus();
      return false;
    }
  
    if (message.value == "") {
      let alert = document.getElementById("message-alert");
      alert.style.display = "block";
      setTimeout(function () {
        alert.style.display = "none";
      }, 2000);
      message.focus();
      return false;
    }
    name.value = "";
    email.value = "";
    number.value = "";
    message.value = "";
    showSuccessPopup();
    return true;
  }
  
  function showSuccessPopup() {
    var success = document.getElementById("success-alert");
    success.style.display = "block";
    setTimeout(function () {
      success.style.display = "none";
    }, 3000);
  }