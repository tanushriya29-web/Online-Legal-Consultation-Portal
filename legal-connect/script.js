document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("consultationForm");

    if (!form) {
        console.log("Consultation form not found");
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("FORM SUBMITTED");

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const category = document.getElementById("category").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const problem = document.getElementById("problem").value.trim();

        const selectedType =
            document.querySelector(
                'input[name="consultationType"]:checked'
            );

        // Clear errors
        document.querySelectorAll(".error").forEach(function (error) {
            error.textContent = "";
        });

        let valid = true;

        // Name
        if (name === "") {
            document.getElementById("nameError").textContent =
                "Please enter your name.";
            valid = false;
        }

        // Email
        if (email === "") {
            document.getElementById("emailError").textContent =
                "Please enter your email.";
            valid = false;
        }

        // Phone
        if (!/^[6-9][0-9]{9}$/.test(phone)) {
            document.getElementById("phoneError").textContent =
                "Enter a valid 10 digit phone number.";
            valid = false;
        }

        // Category
        if (category === "") {
            document.getElementById("categoryError").textContent =
                "Please select a category.";
            valid = false;
        }

        // Date
        if (date === "") {
            document.getElementById("dateError").textContent =
                "Please select a date.";
            valid = false;
        }

        // Time
        if (time === "") {
            document.getElementById("timeError").textContent =
                "Please select a time.";
            valid = false;
        }

        // Consultation type
        if (!selectedType) {
            document.getElementById("typeError").textContent =
                "Please select Online or In Person.";
            valid = false;
        }

        // Problem
        if (problem.length < 20) {
            document.getElementById("problemError").textContent =
                "Please enter at least 20 characters.";
            valid = false;
        }

        // Stop if invalid
        if (!valid) {
            return;
        }

        // Get consultation type
        const consultationType = selectedType.value;

        // Create ID
        const consultationID = "LC" + Date.now();

        // Create consultation
        const consultation = {
            id: consultationID,
            clientName: name,
            email: email,
            phone: phone,
            lawyer: "Adv. Rahul Sharma",
            category: category,
            date: date,
            time: time,
            type: consultationType,
            problem: problem,
            status: "Pending"
        };

        // Get existing consultations
        let consultations =
            JSON.parse(localStorage.getItem("consultations")) || [];

        // Add consultation
        consultations.push(consultation);

        // Save consultation
        localStorage.setItem(
            "consultations",
            JSON.stringify(consultations)
        );

        console.log("CONSULTATION SAVED");
        console.log(consultation);

        // Show confirmation details
        document.getElementById("confirmationDetails").innerHTML =
            "<p><strong>Consultation ID:</strong> " + consultationID + "</p>" +
            "<p><strong>Client:</strong> " + name + "</p>" +
            "<p><strong>Email:</strong> " + email + "</p>" +
            "<p><strong>Phone:</strong> " + phone + "</p>" +
            "<p><strong>Lawyer:</strong> Adv. Rahul Sharma</p>" +
            "<p><strong>Category:</strong> " + category + "</p>" +
            "<p><strong>Date:</strong> " + date + "</p>" +
            "<p><strong>Time:</strong> " + time + "</p>" +
            "<p><strong>Type:</strong> " + consultationType + "</p>" +
            "<p><strong>Problem:</strong> " + problem + "</p>" +
            "<p><strong>Status:</strong> <span class='pending'>Pending</span></p>";

        // Hide form
        document.querySelector(".consultation-box").style.display = "none";

        // Show confirmation
        document.getElementById("confirmation").style.display = "block";

        // Scroll
        document.getElementById("confirmation").scrollIntoView({
            behavior: "smooth"
        });

    });


    // New request button
    const newRequestButton =
        document.getElementById("newRequestButton");

    if (newRequestButton) {

        newRequestButton.addEventListener("click", function () {

            form.reset();

            document.getElementById("confirmation").style.display =
                "none";

            document.querySelector(".consultation-box").style.display =
                "block";

        });

    }

});