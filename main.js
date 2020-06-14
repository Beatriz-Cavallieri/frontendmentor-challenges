const submitButton = document.getElementById('submit-btn')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const emailAddress = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')

form.addEventListener('submit', e => {
    if (checkEmpty(firstName)) {
        e.preventDefault()
        firstName.parentElement.classList.add('error')
    }
    else {
        firstName.parentElement.classList.remove('error')
    }
    if (checkEmpty(lastName)) {
        e.preventDefault()
        lastName.parentElement.classList.add('error')
    }
    else {
        lastName.parentElement.classList.remove('error')
    }
    if (checkEmpty(emailAddress) || !isEmail(emailAddress)) {
        e.preventDefault()
        emailAddress.parentElement.classList.add('error')
    }
    else {
        emailAddress.parentElement.classList.remove('error')
    }
    if (checkEmpty(password)) {
        e.preventDefault()
        password.parentElement.classList.add('error')
    }
    else {
        password.parentElement.classList.remove('error')
    }
})

function checkEmpty(field) {
    if (field.value === "" || field.value === null) {
        
        return true
    }
    else {
        return false
    }
}

function isEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true
    }
    else {
        return false
    }
}