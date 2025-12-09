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

            // ✅ Login success message
            msg.innerHTML = "<p style='color:green; font-weight:bold;'>Successfully Login!</p>";

            // 3 second delay → info popup
            setTimeout(() => {
                alert("Please share your username and password on CA email.");
                window.location.href = "dashboard.html";
            }, 3000);

        } else {
            // ❌ Incorrect credentials
            msg.innerHTML = "<p style='color:red; font-weight:bold;'>Invalid Email or Password!</p>";
        }
    });
});