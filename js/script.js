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

    email.addEventListener("input", () => {
        email.setCustomValidity("");
        error.textContent = ""; 
        error.classList.remove("visible");
    });

    form.addEventListener("submit", (e) => { 
        e.preventDefault();

        // firstname verif check 

        if (firstName.validity.valueMissing) { 
            firstName.setCustomValidity("First Name cannot be empty."); 
            firstNameError.textContent("First Name cannot be empty."); 
            firstNameError.classList.add("visible"); 
        } else { 
            firstNameError.setCustomValidity(""); 
            firstNameError.classList.remove("visible");
            firstName.value = ""; 
        }

        // lastname verif check - add after integrate submit 

        // email verif check 

        if (email.validity.valueMissing) { 
            email.setCustomValidity("Looks like this is not an email."); 
            emailError.textContent = "Looks like this is not an email.";
            emailError.classList.add("visible");
        } else if (email.validity.typeMismatch) { 
            emailError.setCustomValidity("Looks like this is not an email."); 
            emailError.textContent = "Looks like this is not an email."; 
            emailError.classList.add("visible"); 
        } else { 
            emailError.setCustomValidity(""); 
            emailError.classList.remove("visible"); 
            email.value = "";
        }
    })

})
