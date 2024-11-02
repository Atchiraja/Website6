
let users = JSON.parse(localStorage.getItem('users')) || [];
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the form values
        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;

        // Check if the user exists with the correct username and password
        const user = users.find(u => u.username === loginUsername && u.password === loginPassword);

        if (user) {
            // Successful login - Redirect to home page
            window.location.href = "Home.html";
        } else {
            // Show error message if login fails
            loginError.classList.remove('d-none'); // Make the error message visible
            loginError.classList.add('d-block');
        }
    });
 
}