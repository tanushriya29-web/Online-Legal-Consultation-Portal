document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("consultationForm");

    if (!form) {
        console.log("Consultation form not found");
        return;
    }

    form.addEventListener("submit", async function (event) {

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

        document.querySelectorAll(".error").forEach(function (error) {
            error.textContent = "";
        });

        let valid = true;

        if (name === "") {
            document.getElementById("nameError").textContent =
                "Please enter your name.";
            valid = false;
        }

        if (email === "") {
            document.getElementById("emailError").textContent =
                "Please enter your email.";
            valid = false;
        }

        if (!/^[6-9][0-9]{9}$/.test(phone)) {
            document.getElementById("phoneError").textContent =
                "Enter a valid 10 digit phone number.";
            valid = false;
        }

        if (category === "") {
            document.getElementById("categoryError").textContent =
                "Please select a category.";
            valid = false;
        }

        if (date === "") {
            document.getElementById("dateError").textContent =
                "Please select a date.";
            valid = false;
        }

        if (time === "") {
            document.getElementById("timeError").textContent =
                "Please select a time.";
            valid = false;
        }

        if (!selectedType) {
            document.getElementById("typeError").textContent =
                "Please select Online or In Person.";
            valid = false;
        }

        if (problem.length < 20) {
            document.getElementById("problemError").textContent =
                "Please enter at least 20 characters.";
            valid = false;
        }

        if (!valid) {
            return;
        }

        const consultationType = selectedType.value;

        /*
        Save consultation to Supabase
        */

        const { data, error } = await supabaseClient
            .from("consultations")
            .insert([
                {
                    client_name: name,
                    email: email,
                    phone: phone,
                    lawyer_name: "Adv. Rahul Sharma",
                    category: category,
                    consultation_date: date,
                    consultation_time: time,
                    consultation_type: consultationType,
                    problem: problem,
                    status: "Pending"
                }
            ])
            .select()
            .single();

        if (error) {

            console.error("Supabase Error:", error);

            alert(
                "Unable to save consultation.\n\n" +
                error.message
            );

            return;
        }

        console.log("CONSULTATION SAVED");
        console.log(data);

        /*
        Show confirmation
        */

        document.getElementById("confirmationDetails").innerHTML =

            "<p><strong>Consultation ID:</strong> LC" +
            data.id +
            "</p>" +

            "<p><strong>Client:</strong> " +
            name +
            "</p>" +

            "<p><strong>Email:</strong> " +
            email +
            "</p>" +

            "<p><strong>Phone:</strong> " +
            phone +
            "</p>" +

            "<p><strong>Lawyer:</strong> Adv. Anurag Singh</p>" +

            "<p><strong>Category:</strong> " +
            category +
            "</p>" +

            "<p><strong>Date:</strong> " +
            date +
            "</p>" +

            "<p><strong>Time:</strong> " +
            time +
            "</p>" +

            "<p><strong>Type:</strong> " +
            consultationType +
            "</p>" +

            "<p><strong>Problem:</strong> " +
            problem +
            "</p>" +

            "<p><strong>Status:</strong> " +
            "<span class='pending'>Pending</span>" +
            "</p>";

        document.querySelector(".consultation-box").style.display =
            "none";

        document.getElementById("confirmation").style.display =
            "block";

        document.getElementById("confirmation").scrollIntoView({
            behavior: "smooth"
        });

    });


    /*
    New Consultation button
    */

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