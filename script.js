let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');

signInBtn.addEventListener('click',()=>{
    // nameField.style.maxHeight='0';
    title.innerHTML ='Sign In';
    signUpBtn.classList.add('disabale');
    signInBtn.classList.remove('disabale');
    underline.style.transform = 'translateX(35px)';
})