$(document).ready(function() {
    // AJAX request to fetch user data from PHP
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/php/profile.php', // URL to your PHP script
        dataType: 'json',
        success: function(response) {
            // Populate user data into HTML elements
            $('#name').text(response.name);
            $('#email').text(response.email);
            $('#phone').text(response.phone);
            $('#gender').text(response.gender);
            $('#dob').text(response.dob);
        },
        error: function() {
            alert('Error fetching user data.');
        }
    });
});
