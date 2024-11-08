// controllers/userController.js

// Import the userService
const userService = require('../services/userService');

// Define the UserController class to manage user related requests
class UserController {

    // Handle the request to get all users
    async getAllUsers(req, res) {
        try {
            // Fetch all users from the user service
            const users = await userService.getAllUsers();
            // Respond with the users data and HTTP status 200 (OK)
            res.status(200).json(users);
        } catch(e) {
            // If an error occurs, log the error and respond with status 500 (Internal Server Error)
            console.error('Error fetching users:', e);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    // Handle the request to get a user by their ID
    async getUserById(req, res) {
        try {
            // Parse the ID from the request parameters and convert it to an integer
            const id = parseInt(req.params.id, 10);
            // Fetch the user from the user service by ID
            const user = await userService.getUserById(id);
            // If the user does not exist, respond with 404 (Not Found)
            if(!user)
                return res.status(404).json({message: 'User not found'});
            // Respond with the user data and HTTP status 200 (OK)
            res.status(200).json(user);
        } catch(e) {
            // If an error occurs, log the error and respond with status 500 (Internal Server Error)
            console.error('Error fetching user', e);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    // Handle the request to create a new user
    async createUser(req, res) {
        try {
            // Extract user data (name, email, password) from the request body
            const { name, email, pass } = req.body;
            // Call the user service to create the new user
            const newUser = await userService.createUser({ name, email, pass });
            // Respond with the newly created user and HTTP status 201 (Created)
            res.status(201).json(newUser);
        } catch(e) {
            // If an error occurs, log the error and respond with status 500 (Internal Server Error)
            console.error('Error creating user:', e);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    // Handle the request to update an existing user
    async updateUser(req, res) {
        try {
            // Parse the user ID from the request parameters
            const id = parseInt(req.params.id, 10);
            // Extract updated user data from the request body
            const { name, email, pass, points, rewards } = req.body;
            // Call the user service to update the user's data
            const success = await userService.updateUser(id, { name, email, pass, points, rewards });
            // If the update fails, respond with 404 (Not Found)
            if (!success) {
                return res.status(404).json({message: 'User not found or no changes made'});
            }
            // Respond with a success message and HTTP status 200 (OK)
            res.status(200).json({message: 'User updated successfully'});
        } catch(e) {
            // If an error occurs, log the error and respond with status 500 (Internal Server Error)
            console.error('Error updating user:', e);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    // Handle the request to delete a user
    async deleteUser(req, res) {
        try {
            // Parse the user ID from the request parameters
            const id = parseInt(req.params.id, 10);
            // Call the user service to delete the user by ID
            const success = await userService.deleteUser(id);
            // If the user could not be deleted, respond with 404 (Not Found)
            if (!success) {
                return res.status(404).json({message: 'User not found'});
            }
            // Respond with a success message and HTTP status 200 (OK)
            res.status(200).json({ message: 'User deleted successfully' });
        } catch(e) {
            // If an error occurs, log the error and respond with status 500 (Internal Server Error)
            console.error('Error deleting user', e);
            res.status(500).json({message: 'Internal server error'});
        }
    }

    // Handle the request to check user login credentials
    async checkLogin(req, res) {
        try {
            // Extract username and password from the request body
            const { name, pass } = req.body;
            // Call the user service to check login credentials
            const success = await userService.checkLogin(name, pass);
            // If the credentials are incorrect, respond with 401 (Unauthorized)
            if (!success) {
                return res.status(401).json({message: 'Incorrect username or password'});
            }
            // If login is successful, respond with a success message and HTTP status 200 (OK)
            res.status(200).json({message: 'User login successful'});
        } catch(e) {
            // If an error occurs, log the error and respond with status 500 (Internal Server Error)
            console.error('Login Error', e);
            res.status(500).json({message: 'Internal server error'});
        }
    }
}

// Export an instance of the UserController class for use in routes
module.exports = new UserController();