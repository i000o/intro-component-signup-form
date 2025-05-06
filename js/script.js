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

    email.addEventListener("input", () => { // clears error msg as user types a correct email after a wrong one 
        email.setCustomValidity("");
        emailError.textContent = ""; 
        emailError.classList.remove("visible");
    });

    form.addEventListener("submit", (e) => { 
        e.preventDefault();

        console.log('Submit triggered'); 
        console.log('First Name value:', firstName.value);
        console.log('Last Name value:', lastName.value); 
        console.log('Email value:', email.value); 
        console.log('Password value:', pw.value);
        console.log(firstNameError.classList.contains("visible"));

        // firstname verif check 

        if (firstName.validity.valueMissing) { 
            firstName.setCustomValidity("First Name cannot be empty"); 
            firstNameError.textContent = "First Name cannot be empty"; 
            firstNameError.classList.add("visible"); 
        } else { 
            firstName.setCustomValidity(""); 
            firstNameError.classList.remove("visible");
            firstName.value = ""; 
        }

        // lastname verif check

        if (lastName.validity.valueMissing) { 
            lastName.setCustomValidity("Last Name cannot be empty"); 
            lastNameError.textContent = "Last Name cannot be empty"; 
            lastNameError.classList.add("visible"); 
        } else { 
            lastName.setCustomValidity("");
            lastNameError.classList.remove('visible'); 
            lastName.value = ""; 
        }

        // email verif check 

        if (email.validity.valueMissing) { 
            email.setCustomValidity("Email Address cannot be empty"); 
            emailError.textContent = "Email Address cannot be empty";
            emailError.classList.add("visible");
        } else if (email.validity.typeMismatch) { 
            email.setCustomValidity("Looks like this is not an email"); 
            emailError.textContent = "Looks like this is not an email"; 
            emailError.classList.add("visible"); 
        } else { 
            email.setCustomValidity(""); 
            emailError.classList.remove("visible"); 
            email.value = "";
        }

        // pw verif check 

        if (pw.validity.valueMissing) { 
            pw.setCustomValidity("Password cannot be empty"); 
            pwError.textContent = "Password cannot be empty"; 
            pwError.classList.add("visible"); 
        } else { 
            pw.setCustomValidity(""); 
            pwError.classList.remove("visible"); 
            pw.value = ""; 
        }
    })

})