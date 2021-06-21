
let menu = document.querySelector('.ham-menu');
let ham1 = document.querySelector('.ham-layer-left');
let ham2 = document.querySelector('.ham-layer-right');
let navLinks = document.querySelector('.nav-links');
let navLinkButtons = document.querySelectorAll('.nav-link');

// navigation
menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    ham1.classList.toggle('active');
    ham2.classList.toggle('active');
})

navLinkButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        ham1.classList.toggle('active');
        ham2.classList.toggle('active');
    })
})

//faqs accordion

let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})


// form validations
let signUpForm = document.querySelector('.signup-form');
let errors = [];

// phone
let phoneValidation = (phone) => {
    if(phone.length !== 10){
        passedValidation = false;
        let error = 'Enter a valid phone number';
        errors.push(error);
        document.querySelector('.phoneError').innerHTML = error;
        return false;
    }
    return true;
}
// email
let emailValidation = (email) => {
    if(email.indexOf('@') == -1 || email.indexOf('@') == 0 || email.indexOf('@') == email.length-1){
        passedValidation = false;
        let error = 'Enter a valid email';
        errors.push(error);
        document.querySelector('.emailError').innerHTML = error;
    }
    return true;
}
// passwordLength
let passwordLengthValidation = (password) => {
    if(password.length > 5){
        passedValidation = false;
        let error = 'password must be atleast 6 characters long';
        errors.push(error);
        document.querySelector('.passwordError').innerHTML = error;
    }
    return true;
}
// passwordCompare
let passwordCompareValidation = (password, confirmPassword) => {
    if(password !== confirmPassword){
        passedValidation = false;
        let error = 'passwords do not match';
        errors.push(error);
        document.querySelectorAll('.passwordError').forEach(element => {
            element.innerHTML = error
        })
    }
    return true;
}

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let passedValidation = true;
    let email = signUpForm.email.value;
    let password = signUpForm.password.value;

    let phone = signUpForm.phone.value || null ;
    let confirmPassword = signUpForm.confirmPassword.value || null;

    // email validation
    emailValidation(email);

    // phone validation
    phoneValidation(phone);

    // password validation
    passwordLengthValidation(password);
    passwordCompareValidation(password, confirmPassword);
    
    passedValidation? signUpForm.submit() : console.log(errors);
});