document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
    } else {
        alert('Incorrect username or password.');
    }
});

function togglePassword(inputId, showIconId, hideIconId) {
    const passwordInput = document.getElementById(inputId);
    const showIcon = document.getElementById(showIconId);
    const hideIcon = document.getElementById(hideIconId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showIcon.style.display = "block";  
        hideIcon.style.display = "none";   
        showIcon.classList.add("show");    
    } else {
        passwordInput.type = "password";
        showIcon.style.display = "none";   
        hideIcon.style.display = "block";  
        showIcon.classList.remove("show"); 
    }
}
