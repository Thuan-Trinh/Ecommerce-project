document.addEventListener("DOMContentLoaded", function() {
    const signupBtn = document.getElementById("signup-btn");

    signupBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form

        // Lấy giá trị từ các trường input
        const name = document.getElementById("name").value.trim();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const agree = document.getElementById("agree").checked;

        // Kiểm tra xem thông tin nhập vào có hợp lệ không
        if (!isValidName(name)) {
            alert("Please enter your name.");
            return; // Dừng lại nếu thông tin không hợp lệ
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return; // Dừng lại nếu thông tin không hợp lệ
        }

        if (!isValidPassword(password)) {
            alert("Password must be at least 8 characters long.");
            return; // Dừng lại nếu thông tin không hợp lệ
        }

        if (!username || !agree) {
            alert("Please fill in all fields and agree to the terms.");
            return; // Dừng lại nếu thông tin không hợp lệ
        }

        // Chuyển hướng đến trang đăng nhập nếu thông tin hợp lệ
        window.location.href = "login.html"; // Đổi "login.html" thành đường dẫn của trang đăng nhập
    });

    function isValidName(name) {
        // Kiểm tra xem tên có rỗng không
        return name !== "";
    }

    function isValidEmail(email) {
        // Kiểm tra định dạng email bằng biểu thức chính quy
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        // Kiểm tra xem mật khẩu có ít nhất 8 ký tự không
        return password.length >= 8;
    }
});
