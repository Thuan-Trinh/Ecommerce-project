document.addEventListener("DOMContentLoaded", function() {
    const signupBtn = document.getElementById("signup-btn");

    signupBtn.addEventListener("click", function(event) {
        event.preventDefault(); 

        
        const name = document.getElementById("name").value.trim();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const agree = document.getElementById("agree").checked;

        if (!isValidName(name)) {
            alert("Please enter your name.");
            return; 
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return; 
        }

        if (!isValidPassword(password)) {
            alert("Password must be at least 8 characters long.");
            return; 
        }

        if ((!username || !agree) && !isValidEmail(username)) {
            alert("Please fill in all fields and agree to the terms. If you entered an email, please use the email field.");
            return; 
        }

        let usersData = JSON.parse(localStorage.getItem('usersData')) || [];

        
        if (usersData.some(user => user.email === email)) {
            alert("An account with this email already exists. Please use a different email address.");
            return;
        }

        if (usersData.some(user => user.username === username)) {
            alert("Username already exists. Please choose another username.");
            return;
        }

        const newUser = {
            name: name,
            username: username,
            email: email,
            password: password,
        };
        usersData.push(newUser);

        localStorage.setItem('usersData', JSON.stringify(usersData));

        signupBtn.disabled = true; 
        setTimeout(function() {
            window.location.href = "login.html"; 
        }, 3000); 
    });

    function isValidName(name) {
        return name !== "";
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        return password.length >= 8;
    }
});
