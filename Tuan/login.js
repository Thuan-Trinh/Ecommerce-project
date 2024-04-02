document.addEventListener("DOMContentLoaded", function() {
    const signInButton = document.querySelector(".sign-in-button");

    signInButton.addEventListener("click", function() {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

       
        const usersDataString = localStorage.getItem('usersData');
        if (!usersDataString) {
            alert("No user data found. Please sign up first.");
            return;
        }

        const usersData = JSON.parse(usersDataString);
       
        const user = usersData.find(user => user.email === email && user.password === password);
        if (user) {
            
            window.location.href = "../index.html";
            
        } else {
            
            alert("Invalid email or password. Please try again.");
        }
    });
});

