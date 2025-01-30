// Function to reserve a table (for now, it just shows an alert)
function reserveTable() {
    alert("Reservation page is under development!");
}

// Function to toggle the menu visibility on mobile
function toggleMenu() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active');
}

// Smooth scroll for anchor links
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form Validation Script
document.getElementById("reservation-form").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const dateTime = document.getElementById("date-time").value;
    const guests = document.getElementById("guests").value;

    // Basic validation
    if (!name || !phone || !email || !dateTime || !guests) {
        alert("Please fill in all the required fields.");
        return; // Stop form submission
    }

    // If all fields are valid, submit the form (for demo purposes, we just log the form data)
    console.log("Form Submitted!");
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Date and Time: ${dateTime}`);
    console.log(`Guests: ${guests}`);
    console.log(`Special Requests: ${document.getElementById("special-requests").value}`);

    // Optionally, here you could send the form data to a server (e.g., using AJAX)
    // For now, we will clear the form for the user after submission.
    document.getElementById("reservation-form").reset();
});


// Example of dynamically filling ratings, if needed
document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll('.review-rating');
    reviews.forEach((review) => {
        const stars = review.querySelectorAll('.star');
        let rating = stars.length;
        stars.forEach((star, index) => {
            if (index >= rating) {
                star.classList.add('empty');  // Optional: Add class for empty stars
            }
        });
    });
});

// Basic form validation
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        event.preventDefault();
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});
