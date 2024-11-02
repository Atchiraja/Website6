// Simulated user database (you can use localStorage or a real database in a real application)
let users = JSON.parse(localStorage.getItem('users')) || [];

// Registration form submission handler
const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the form values
        const regUsername = document.getElementById('regUsername').value;
        const regPassword = document.getElementById('regPassword').value;

        // Check if the username already exists
        const existingUser = users.find(user => user.username === regUsername);

        if (existingUser) {
            alert('Username already exists. Please choose a different username.');
        } else if (regUsername && regPassword) {
            // Add the new user to the users array
            users.push({ username: regUsername, password: regPassword });

            // Store updated users array in localStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Show success message and redirect to login page on "OK"
            if (confirm('Registration successful! Click OK to go to the login page.')) {
                window.location.href = "Login.html";  // Redirect to login page
            }
        } else {
            alert('Please fill in all fields.');
        }
    });
}
