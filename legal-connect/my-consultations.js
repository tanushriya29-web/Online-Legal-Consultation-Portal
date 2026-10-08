document.addEventListener("DOMContentLoaded", async function () {

    const consultationList =
        document.getElementById("consultationList");

    if (!consultationList) {
        return;
    }

    consultationList.innerHTML =
        "<p>Loading consultations...</p>";

    /*
    Get consultations from Supabase
    */

    const { data, error } = await supabaseClient
        .from("consultations")
        .select("*")
        .order("created_at", {
            ascending: false
        });

    if (error) {

        console.error("Supabase Error:", error);

        consultationList.innerHTML = `
            <div class="no-consultation">
                <h3>Unable to Load Consultations</h3>
                <p>${error.message}</p>
            </div>
        `;

        return;
    }

    console.log("Consultations:", data);

    /*
    No consultations
    */

    if (!data || data.length === 0) {

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

    /*
    Display consultations
    */

    consultationList.innerHTML = "";

    data.forEach(function (consultation) {

        const card =
            document.createElement("div");

        card.className =
            "consultation-card";

        card.innerHTML =

            "<h3>Consultation ID: LC" +
            consultation.id +
            "</h3>" +

            "<p><strong>Client:</strong> " +
            consultation.client_name +
            "</p>" +

            "<p><strong>Lawyer:</strong> " +
            consultation.lawyer_name +
            "</p>" +

            "<p><strong>Category:</strong> " +
            consultation.category +
            "</p>" +

            "<p><strong>Date:</strong> " +
            consultation.consultation_date +
            "</p>" +

            "<p><strong>Time:</strong> " +
            consultation.consultation_time +
            "</p>" +

            "<p><strong>Type:</strong> " +
            consultation.consultation_type +
            "</p>" +

            "<p><strong>Problem:</strong> " +
            consultation.problem +
            "</p>" +

            "<p><strong>Status:</strong> " +

            "<span class='pending'>" +
            consultation.status +
            "</span>" +

            "</p>";

        consultationList.appendChild(card);

    });

});