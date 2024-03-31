// JavaScript to show/hide the "Contact Us" button when scrolling to the footer
window.addEventListener('scroll', function() {
    var contactButton = document.querySelector('.contact-button');
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
        contactButton.style.display = 'block';
    } else {
        contactButton.style.display = 'none';
    }
});

// JavaScript to open and close the pop-up
var contactPopup = document.getElementById('contact-popup');
var showContactPopup = document.getElementById('show-contact-popup');
var closeContactPopup = document.getElementById('close-contact-popup');

showContactPopup.addEventListener('click', function() {
    contactPopup.style.display = 'block';
});

closeContactPopup.addEventListener('click', function() {
    contactPopup.style.display = 'none';
});

// JavaScript to submit the contact form (you need to add the functionality for form submission)
var contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your code to handle form submission, e.g., sending an email or storing the data.
    // Then, close the pop-up.
    contactPopup.style.display = 'none';
});
