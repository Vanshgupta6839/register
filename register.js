document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value.trim();

        // Gmail validation
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!gmailRegex.test(email)) {
            alert("Please enter a valid Gmail address!");
            return;
        }

        // Phone validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid 10-digit phone number!");
            return;
        }

        if (!username || !name || !password) {
            alert("All fields are required!");
            return;
        }

        const user = { username, email, name, phone, password };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Successfully Registered! Please check your Gmail for verification (demo).");

        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    });
});
