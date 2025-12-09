document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (name === "" || email === "" || password === "") {
            alert("All fields are required!");
            return;
        }

        // Save user in localStorage (fake database)
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPass", password);

        alert("Registration Successful!");
        window.location.href = "login.html";
    });
});