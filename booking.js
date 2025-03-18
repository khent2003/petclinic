document.getElementById("appointmentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let petName = document.getElementById("petName").value;
    let petType = document.getElementById("petType").value;
    let ownerName = document.getElementById("ownerName").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let confirmationMessage = `
        🐶 Pet: <strong>${petName}</strong> (${petType}) <br>
        👤 Owner: <strong>${ownerName}</strong> <br>
        📅 Date: <strong>${date}</strong> <br>
        ⏰ Time: <strong>${time}</strong>
    `;

    document.getElementById("confirmationDetails").innerHTML = confirmationMessage;
    document.getElementById("confirmationPopup").style.display = "flex";
});

function closePopup() {
    document.getElementById("confirmationPopup").style.display = "none";
}
