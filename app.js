// 1. get DOM element
const regForm = document.getElementById('registration-form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const email = document.getElementById('email')
const Confirmpassword = document.getElementById('password-2')
const usernameErr = username.nextElementSibling
const passwordErr = password.nextElementSibling
const emailErr = email.nextElementSibling
const ConfirmpasswordErr = Confirmpassword.nextElementSibling
const usernameSuccess = usernameErr.nextElementSibling
const emailSuccess = emailErr.nextElementSibling
const passwordSucess = passwordErr.nextElementSibling
const ConfirmpasswordSuccess = ConfirmpasswordErr.nextElementSibling

// const usernameErr = document.getElementById("usernameErr")

// 2. Add event / modification

regForm.addEventListener('click', function (e) {
  e.preventDefault()

  // 2. Check if the value is empty
  if (username.value === '') {
    // 3. If empty, give user some feedback
    usernameErr.className = 'block bg-red-500 text-white'
  } else {
   usernameSuccess.className = 'block bg-green-600 text-white'
  }

 //@TODO: add the validation for email
 if (email.value === '') {
  emailErr.className = 'block bg-red-500 text-white'
} else {
emailSuccess.className = 'block bg-green-600 text-white'  

}

  //@TODO: add the validation for password


if (password.value === '') {
  passwordErr.className = 'block bg-red-600 text-white'
}
else {
  passwordSucess.className = 'block bg-green-600 text-white'
 }


 if (Confirmpassword.value === 'password.value'){
   ConfirmpasswordErr.className = 'block bg-red-600 text-white'
 }
 else {
   ConfirmpasswordSuccess.className = 'block bg-green-600 text-white'
 }
})