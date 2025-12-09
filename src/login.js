document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const msg = document.getElementById("msg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser) {
            msg.innerHTML = "<p class='error'>No user registered!</p>";
            return;
        }

        if (email === savedUser.email && password === savedUser.password) {
            localStorage.setItem("loggedInUser", savedUser.name);
            window.location.href = "dashboard.html";
        } else {
            msg.innerHTML = "<p class='error'>Invalid Email or Password!</p>";
        }
    });
});