//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('checkbox');
    const submitButton = document.getElementById('submit');
    const existingUserButton = document.getElementById('existing');

    // Check for saved credentials on page load
    checkSavedCredentials();

    // Form submission handler
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        // Show login alert
        alert(`Logged in as ${username}`);
        
        // Handle remember me functionality
        if (rememberCheckbox.checked) {
            // Save credentials to localStorage
            localStorage.setItem('savedUsername', username);
            localStorage.setItem('savedPassword', password);
        } else {
            // Remove saved credentials if checkbox is unchecked
            localStorage.removeItem('savedUsername');
            localStorage.removeItem('savedPassword');
        }
        
        // Update UI based on saved credentials
        checkSavedCredentials();
    });

    // Existing user login handler
    existingUserButton.addEventListener('click', function() {
        const savedUsername = localStorage.getItem('savedUsername');
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    });

    // Function to check for saved credentials and update UI
    function checkSavedCredentials() {
        const savedUsername = localStorage.getItem('savedUsername');
        const savedPassword = localStorage.getItem('savedPassword');
        
        if (savedUsername && savedPassword) {
            // Show existing user button
            existingUserButton.classList.remove('hidden');
            
            // Pre-fill the form with saved credentials
            usernameInput.value = savedUsername;
            passwordInput.value = savedPassword;
            rememberCheckbox.checked = true;
        } else {
            // Hide existing user button
            existingUserButton.classList.add('hidden');
            
            // Clear the form if no saved credentials
            if (!rememberCheckbox.checked) {
                usernameInput.value = '';
                passwordInput.value = '';
            }
        }
    }
});