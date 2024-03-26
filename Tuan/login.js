document.addEventListener("DOMContentLoaded", function() {
    const signInButton = document.querySelector(".sign-in-button");
    const eyeIcon = document.querySelector(".eye-icon");
    const passwordField = document.getElementById("password");

    passwordField.addEventListener("input", function() {
        const newPassword = passwordField.value;
        if (newPassword !== "") {
            eyeIcon.classList.add("visible");
        } else {
            eyeIcon.classList.remove("visible");
        }
    });

    signInButton.addEventListener("click", function() {
        const email = document.getElementById("email").value;
        const password = passwordField.value;

        // Thực hiện kiểm tra đăng nhập, ví dụ:
        if (email === "admin@gmail.com" && password === "12345678") {
            // Nếu đăng nhập thành công, chuyển hướng đến trang chính hoặc trang sau đăng nhập
            window.location.href = "home.html";
        } else {
            // Nếu đăng nhập không thành công, hiển thị thông báo lỗi
            alert("Invalid email or password. Please try again.");
        }
    });

    eyeIcon.addEventListener("click", function() {
        const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
        passwordField.setAttribute("type", type);
        // Thay đổi icon của eye khi người dùng nhấp vào
        this.classList.toggle("visible");
    });
});
