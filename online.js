document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    const appointmentsList = document.getElementById("appointmentsList");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const ownerName = document.getElementById("owner-name").value.trim();
        const petName = document.getElementById("pet-name").value.trim();
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        if (!ownerName || !petName || !date || !time) {
            alert("Please fill out all fields.");
            return;
        }

        // Create an appointment entry
        const appointmentItem = document.createElement("li");
        appointmentItem.classList.add("list-group-item");
        appointmentItem.innerHTML = `<strong>${petName} (${service})</strong> - ${date} at ${time} 
            <button class="cancel-btn">Cancel</button>`;

        // Add cancel functionality
        appointmentItem.querySelector(".cancel-btn").addEventListener("click", function () {
            appointmentsList.removeChild(appointmentItem);
        });

        // Add to list
        appointmentsList.appendChild(appointmentItem);

        // Clear form
        bookingForm.reset();
    });
});
