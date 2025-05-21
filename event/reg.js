// Form Validation
document.querySelector('form').addEventListener('submit', function(event) {
    let name = document.querySelector('input[type="text"]').value;
    let age = document.querySelector('input[type="number"]').value;
    let gender = document.querySelector('input[name="Gender"]:checked');
    let danceStyle = document.querySelector('select').value;
    let classTime = document.querySelector('input[name="class time"]:checked');
    let duration = document.querySelector('select:nth-of-type(2)').value;

    // Validate name
    if (!name) {
        alert("Please enter your name.");
        event.preventDefault();
        return;
    }

    // Validate age
    if (!age || age < 1 || age > 100) {
        alert("Please enter a valid age.");
        event.preventDefault();
        return;
    }

    // Validate gender
    if (!gender) {
        alert("Please select your gender.");
        event.preventDefault();
        return;
    }

    // Validate dance style
    if (danceStyle === "select a style") {
        alert("Please select a dance style.");
        event.preventDefault();
        return;
    }

    // Validate class time
    if (!classTime) {
        alert("Please select a class time.");
        event.preventDefault();
        return;
    }

    // Validate duration
    if (duration === "select duration") {
        alert("Please select a duration.");
        event.preventDefault();
        return;
    }
    
    // If all checks pass, submit the form
    alert("Registration successful!");
});
