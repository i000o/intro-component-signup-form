// client-side validation 
// email format check w error msg 
// empty field check w error msg 
// submit button 

// wait til DOM is loaded 

// declare variables 

// perform empty field check, if empty show error msg - add spans to html for this 
// perform email format check, if wrong show error msg - add spans to html for this

document.addEventListener("DOMContentLoaded", () => { // what are the empty brackets here and what is the arrow again? Wait til DOM has loaded 

    let form = document.querySelector(".form"); // declare my variables 
    let firstName = document.getElementById("firstname");
    let lastName = document.getElementById("lastname");
    let email = document.getElementById("email"); 
    let pw = document.getElementById("pw"); 
    let submit = document.getElementById("submit");
    let firstNameError = document.getElementById("firstname-error");
    let lastNameError = document.getElementById("lastname-error");
    let emailError = document.getElementById("email-error"); 
    let pwError = document.getElementById("pw-error"); 

})
