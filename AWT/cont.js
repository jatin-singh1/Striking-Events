// Open login popup
document.querySelector('nav a[href="#login-popup"]').addEventListener('click', function() {
    document.querySelector('#login-popup').style.display = 'block';
});

// Close login popup
document.querySelector('.close-button').addEventListener('click', function() {
    document.querySelector('#login-popup').style.display = 'none';
});
