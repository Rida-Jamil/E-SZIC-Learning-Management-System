const mailField = document.getElementById('mail');
const labels = document.getElementsByTagName('label');
const resetPassword = document.getElementById('resetPassword');
const successModal = document.querySelector('.success');
const failureModal = document.querySelector('.failure');

const auth = firebase.auth();

auth.useDeviceLanguage();

const resetPasswordFunction = () => {
    const email = mailField.value;

    auth.sendPasswordResetEmail(email)
        .then(() => {
            window.alert(" Password Reset Email Sent Successfully! Please check and verify.");
        })
        .catch(error => {
            console.error(error);

            var errorCode = error.code;
            var errorMessage = error.Message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Please write a valid Email Address.");
        })
}


resetPassword.addEventListener('click', resetPasswordFunction);



//Animations
mailField.addEventListener('focus', () => {
    labels.item(0).className = "focused-field";
});

mailField.addEventListener('blur', () => {
    if (!mailField.value)
        labels.item(0).className = "unfocused-field";
});


/* var auth = firebase.auth();

auth.useDeviceLanguage();

const resetPassword = () => {

    const email = mailField.value;

    if (email != "") {
        
    auth.sendPasswordResetEmail(emailAddress)
    .then(function () {
        // Email sent.
        window.alert("Email has been sent to you. Please check and verify.");

    })
        .catch(function (error) {
            // An error happened.

            var errorCode = error.code;
            var errorMessage = error.Message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        })

    } else {

        window.alert("Please input valid email address.");
        
    }
} */