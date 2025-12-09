document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!form) {
        console.error("Login form not found!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "" || password === "") {
            alert("Please enter both email and password!");
            return;
        }

        // Dummy login check (you can replace with real API later)
        if (email === "admin@gmail.com" && password === "12345") {
            alert("Login successful!");
            window.location.href = "dashboard.html"; 
        } else {
            alert("Invalid email or password!");
        }
    });
});