function setError(element, message) {
    var formGroup = element.parentElement;
    var errorMsg = formGroup.querySelector('.error');
    errorMsg.innerText = message;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
}

function setSuccess(element) {
    var formGroup = element.parentElement;
    var errorMsg = formGroup.querySelector('.error');
    errorMsg.innerText = "";
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
}

// Email validation
document.getElementById('email').addEventListener('change', function() {
    var email = document.getElementById("email");
    var regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var emailValue = email.value.trim();
    if(emailValue!="") {
        if(regx.test(emailValue)){
            setSuccess(email);
        }
        else {
            setError(email, "Please, Enter valid email address");
        }
    }
    else {
        setError(email, "Please, Enter email address");
    }
});

// Password validation
var password = document.getElementById("password");
password.addEventListener('change', function() {
    var pswdValue = password.value.trim();
    if(pswdValue!="") {
        if(pswdValue.length>=8) {
            setSuccess(password);
        }
        else {
            setError(password, "Please, Enter valid password");
        }
    }
    else {
        setError(password, "Please, Enter password");
    }
});

// Form submission using AJAX
$('#login-button').on('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    var email = $('#email').val();
    var password = $('#password').val();

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/php/login.php',
        data: { email: email, password: password },
        success: function(response) {
            if (response.trim() === "true") {
                alert("User Validated Successfully");
                window.location.replace('http://127.0.0.1:5500/profile.html');
            } else {
                alert("Incorrect email or password");
            }
        },
        error: function() {
            alert("Something went wrong. Please try again.");
        }
    });
});
