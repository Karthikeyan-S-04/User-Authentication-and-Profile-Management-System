// Disable signup button by default
$("#signup-button").prop("disabled", true);

// Function to check if checkbox is checked
function checkCheckbox() {
  if ($("#agree").prop("checked")) {
    $("#signup-button").prop("disabled", false);
  } else {
    $("#signup-button").prop("disabled", true);
  }
}

// Call the checkCheckbox function when checkbox state changes
$("#agree").on("change", checkCheckbox);

// Handle form submission
$("#signup-button").click(function(event){
    event.preventDefault();

    // Collect form data
    var formData = {
        name: $('#name').val(),
        gender: $('#gender').val(),
        dob: $('#dob').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
        password: $('#password').val()
    };

    // Send AJAX request using GET method
    $.ajax({
        type: 'POST', // Change the method to GET
        url: 'http://localhost:3000/php/register.php', // Update URL as needed
        data: formData,
        success: function(response){
            if(response.trim() === "Registration successful") {
                alert("Registered Successfully");
                window.location.replace("http://localhost:5500/login.html");
            } else {
                alert(response); // Display error message from server
            }
        },
        error: function(error){
            alert("Something went wrong: " + error);
        }
    });
});
