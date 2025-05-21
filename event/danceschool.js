// Smooth scrolling when clicking a link to an anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert when the user clicks on the event registration link
document.querySelector('a[href="registration form.html"]').addEventListener('click', function(e) {
    e.preventDefault();
    alert("You are about to register for the dance classes! Please fill the form.");
    window.location.href = "registration form.html"; // Redirect to the registration page
});
