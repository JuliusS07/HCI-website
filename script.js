const form = document.getElementById("registrationForm");

const message = document.getElementById("message");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const email =
        document.getElementById("email").value.trim();

    const confirmEmail =
        document.getElementById("confirmEmail").value.trim();


    const userId =
        document.getElementById("userId").value.trim();

    const confirmUserId =
        document.getElementById("confirmUserId").value.trim();


    /* CHECK EMAIL */

    if (email !== confirmEmail) {

        showMessage(
            "✕ Email addresses do not match.",
            "error"
        );

        return;
    }


    /* CHECK USER ID */

    if (userId !== confirmUserId) {

        showMessage(
            "✕ User IDs do not match.",
            "error"
        );

        return;
    }


    /* CHECK USER ID LENGTH */

    if (userId.length < 8 || userId.length > 20) {

        showMessage(
            "✕ User ID must be 8-20 characters.",
            "error"
        );

        return;
    }


    /* CHECK FIRST CHARACTER */

    if (!/^[A-Za-z]/.test(userId)) {

        showMessage(
            "✕ User ID must start with a letter.",
            "error"
        );

        return;
    }


    /* CHECK SPECIAL CHARACTERS */

    if (!/^[A-Za-z0-9_]+$/.test(userId)) {

        showMessage(
            "✕ User ID can only contain letters, numbers, and underscores.",
            "error"
        );

        return;
    }


    /* SUCCESS */

    showMessage(
        "✓ Registration successful! Your information is valid.",
        "success"
    );

});


/* MESSAGE FUNCTION */

function showMessage(text, type) {

    message.textContent = text;


    if (type === "success") {

        message.style.color = "#087f23";

        message.style.background = "#e8f8eb";

        message.style.border =
            "2px solid #8ed99b";

    } else {

        message.style.color = "#b42318";

        message.style.background = "#ffe9e7";

        message.style.border =
            "2px solid #ffaaa3";
    }

}


/* CLEAR MESSAGE */

form.addEventListener("reset", function() {

    message.textContent = "";

    message.removeAttribute("style");

});