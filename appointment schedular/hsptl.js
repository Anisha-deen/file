// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const tableBody = document.querySelector("tbody");

  // Listen for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form refresh

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Validation check
    if (!name || !email || !department || !doctor || !date || !time) {
      alert("⚠️ Please fill in all fields before scheduling.");
      return;
    }

    // Create a new table row
    const newRow = document.createElement("tr");

    // Create and fill table cells
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${doctor}</td>
      <td>${department}</td>
      <td>${formatTime(time)}</td>
    `;

    // Append new row to the table
    tableBody.appendChild(newRow);

    // Optional: Save to localStorage (so it stays even after refresh)
    saveAppointment({
      name,
      doctor,
      department,
      time: formatTime(time),
      date
    });

    // Clear the form after submission
    form.reset();

    alert("✅ Appointment Scheduled Successfully!");
  });

  // --- Load saved appointments from localStorage on page load
  const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
  savedAppointments.forEach(app => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${app.name}</td>
      <td>${app.doctor}</td>
      <td>${app.department}</td>
      <td>${app.time}</td>
    `;
    tableBody.appendChild(newRow);
  });

  // --- Save appointment in localStorage ---
  function saveAppointment(appointment) {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }

  // --- Format time (e.g., 14:30 → 2:30 PM) ---
  function formatTime(timeStr) {
    const [hour, minute] = timeStr.split(":");
    const h = parseInt(hour);
    const ampm = h >= 12 ? "PM" : "AM";
    const formattedHour = h % 12 || 12;
    return `${formattedHour}:${minute} ${ampm}`;
  }
});
