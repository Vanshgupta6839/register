document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const msg = document.getElementById("msg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const usernameInput = document.getElementById("username").value.trim();
        const passwordInput = document.getElementById("password").value.trim();

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {
            msg.innerHTML = "<p class='error'>No user registered!</p>";
            return;
        }

        if (usernameInput === savedUser.username && passwordInput === savedUser.password) {
            localStorage.setItem("loggedInUser", savedUser.username);
            localStorage.setItem("userEmail", savedUser.email);

            msg.innerHTML = "<p class='success'>Successfully Login!</p>";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);

        } else {
            msg.innerHTML = "<p class='error'>Invalid Username or Password!</p>";
        }
    });
});
