document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Update eye icon
        const svg = togglePassword.querySelector('svg');
        if (type === 'text') {
            svg.innerHTML = `
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <line x1="2" y1="2" x2="22" y2="22"/>
            `;
        } else {
            svg.innerHTML = `
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
            `;
        }
    });

    // Form validation and submission
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Reset previous errors
        clearErrors();
        
        // Validate inputs
        let isValid = true;
        
        if (!usernameInput.value.trim()) {
            showError(usernameInput, 'Username is required');
            isValid = false;
        }
        
        if (!passwordInput.value) {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        }
        
        if (!isValid) return;

        // Show loading state
        const submitButton = loginForm.querySelector('button[type="submit"]');
        submitButton.classList.add('loading');
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // For demo purposes, check for specific credentials
            if (usernameInput.value === 'demo' && passwordInput.value === 'password123') {
                // Successful login
                showSuccess();
            } else {
                showError(usernameInput, 'Invalid username or password');
                showError(passwordInput, '');
            }
        } catch (error) {
            showError(usernameInput, 'An error occurred. Please try again.');
        } finally {
            submitButton.classList.remove('loading');
        }
    });

    // Helper functions
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        formGroup.classList.add('error');
        errorElement.textContent = message;
    }

    function clearErrors() {
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
            group.querySelector('.error-message').textContent = '';
        });
    }

    function showSuccess() {
        // Add success animation or redirect
        loginForm.innerHTML = `
            <div style="text-align: center; color: var(--success-color);">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h2 style="margin: 1rem 0">Login Successful!</h2>
                <p>Redirecting...</p>
            </div>
        `;
        
        // Simulate redirect
        setTimeout(() => {
            window.location.href = '/dashboard.html';
        }, 2000);
    }
});