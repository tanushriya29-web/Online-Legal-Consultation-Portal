document.addEventListener("DOMContentLoaded", function () {

    const consultationList =
        document.getElementById("consultationList");

    if (!consultationList) {
        return;
    }

    const consultations =
        JSON.parse(
            localStorage.getItem("consultations")
        ) || [];

    console.log("Consultations:", consultations);


    if (consultations.length === 0) {

        consultationList.innerHTML = `
            <div class="no-consultation">
                <h3>No Consultations Found</h3>

                <p>
                    You have not requested any consultation yet.
                </p>

                <br>

                <a href="lawyer-profile.html">
                    Request a Consultation
                </a>
            </div>
        `;

        return;
    }


    consultations.forEach(function (consultation) {

        const card =
            document.createElement("div");

        card.className = "consultation-card";

        card.innerHTML =
            "<h3>Consultation ID: " +
            consultation.id +
            "</h3>" +

            "<p><strong>Client:</strong> " +
            consultation.clientName +
            "</p>" +

            "<p><strong>Lawyer:</strong> " +
            consultation.lawyer +
            "</p>" +

            "<p><strong>Category:</strong> " +
            consultation.category +
            "</p>" +

            "<p><strong>Date:</strong> " +
            consultation.date +
            "</p>" +

            "<p><strong>Time:</strong> " +
            consultation.time +
            "</p>" +

            "<p><strong>Type:</strong> " +
            consultation.type +
            "</p>" +

            "<p><strong>Problem:</strong> " +
            consultation.problem +
            "</p>" +

            "<p><strong>Status:</strong> " +
            "<span class='pending'>" +
            consultation.status +
            "</span></p>";

        consultationList.appendChild(card);

    });

});