# User Authentication and Profile Management System

This project implements a user authentication system using PHP, MySQL, jQuery, and Bootstrap. It includes functionalities for user registration, login, authentication, and displaying user profiles.

## Project Structure

The project is structured as follows:

- `index.html`: HTML file containing the login and registration forms.
- `profile.html`: HTML file for displaying user profile information.
- `profile.php`: PHP file handling AJAX requests and interacting with the database to fetch user data.
- `profile.js`: JavaScript file containing AJAX requests for fetching user data and updating the profile page.
- `style.css`: CSS file for styling the HTML pages.
- `README.md`: Documentation file explaining the project structure, setup instructions, and usage.

## Setup Instructions

To run the project locally, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/user-authentication.git
   ```

2. **Setup Database**:
   - Import the `database.sql` file into your MySQL database to create the necessary tables (`users` and `user_details`).

3. **Configure Database Connection**:
   - Update the database connection details in `profile.php` to match your MySQL server configuration (`$servername`, `$username`, `$password`, `$dbname`).

4. **Start Local Server**:
   - Use a local server environment (e.g., XAMPP, WAMP) to run the PHP files. Ensure the server is running and accessible.

5. **Access the Application**:
   - Open `index.html` in your web browser to access the login and registration forms.
   - After successful login, you'll be redirected to `profile.html`, where user profile information will be displayed.

## Technologies Used

- PHP: Backend scripting language for server-side logic and database interactions.
- MySQL: Relational database management system for storing user data.
- jQuery: JavaScript library for AJAX requests and DOM manipulation.
- Bootstrap: Frontend framework for responsive and visually appealing UI components.
