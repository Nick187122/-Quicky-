// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Star rating functionality
const stars = document.querySelectorAll('.star');
if (stars.length > 0) {
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            document.getElementById('selectedRating').value = rating;
            
            stars.forEach(s => {
                if (s.getAttribute('data-rating') <= rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
}
if (submitRating) {
    submitRating.addEventListener('click', function() {
        const rating = document.getElementById('selectedRating').value;
        if (rating === "0") {
            alert('Please select a rating');
            return;
        }
        
        alert('Thank you for your rating!');
        window.location.href = "index.html"; // This is the line that redirects home
        
        // Reset stars
        stars.forEach(star => star.classList.remove('active'));
        document.getElementById('selectedRating').value = "0";
        document.getElementById('review').value = "";
    });
}

// Form submissions
const complaintForm = document.getElementById('complaintForm');
if (complaintForm) {
    complaintForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your complaint. We will contact you shortly.');
        this.reset();
    });
}

const submitRating = document.getElementById('submitRating');
if (submitRating) {
    submitRating.addEventListener('click', function() {
        const rating = document.getElementById('selectedRating').value;
        if (rating === "0") {
            alert('Please select a rating');
            return;
        }
        
        alert('Thank you for your rating!');
        
        // Reset stars
        stars.forEach(star => star.classList.remove('active'));
        document.getElementById('selectedRating').value = "0";
        document.getElementById('review').value = "";
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
