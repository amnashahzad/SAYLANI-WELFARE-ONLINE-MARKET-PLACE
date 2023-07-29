const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');

signUpButton.addEventListener('click', () => {
    window.location.href = '../sign/sign-up.html';
});

signInButton.addEventListener('click', () => {
    window.location.href = '../sign/sign-in.html';
});