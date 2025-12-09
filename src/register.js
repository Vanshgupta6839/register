document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const msg = document.getElementById("msg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!name || !email || !phone || !password) {
            alert("All fields are required!");
            return;
        }

        const user = { name, email, phone, password };
        localStorage.setItem("user", JSON.stringify(user));

        // ✅ Popup success message
        alert("Successfully Registered! Please check your email.");

        // Redirect to login after 2 seconds
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    });
});