// controllers/gameController.js

// Import gameService to handle game-related operations (CRUD)
const gameService = require('../services/gameService');

class GameController {

    // Handle the request to get all games
    async getAllGames(req, res) {
        try {
            // Fetch all games from the gameService
            const games = await gameService.getAllGames();
            // Respond with the games data and HTTP status 200 (OK)
            res.status(200).json(games);
        } catch (e) {
            // If an error occurs, log the error and respond with status 500 (Internal Server Error)
            console.error('Error fetching games:', e);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // Handle the request to get a specific game by its ID
    async getGameById(req, res) {
        try {
            // Parse the game ID (id) from the request parameters
            const id = parseInt(req.params.id, 10);
            // Fetch the game by ID using the gameService
            const game = await gameService.getGameById(id);
            // If the game is not found, respond with 404 (Not Found)
            if (!game) {
                return res.status(404).json({ message: 'Game not found' });
            }
            // Respond with the game data and HTTP status 200 (OK)
            res.status(200).json(game);
        } catch (e) {
            // If an error occurs, log the error and respond with status 500 (Internal Server Error)
            console.error('Error fetching game', e);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // Handle the request to create a new game
    async createGame(req, res) {
        try {
            // Extract data (name, type, desc, diff) from the request body
            const { name, type, desc, diff } = req.body;
            // Create a new game using the gameService
            const newGame = await gameService.createGame({ name, type, desc, diff });
            // Respond with the newly created game and HTTP status 201 (Created)
            res.status(201).json(newGame);
        } catch (e) {
            // If an error occurs, log the error and respond with status 500 (Internal Server Error)
            console.error('Error creating game', e);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // Handle the request to update an existing game
    async updateGame(req, res) {
        try {
            // Parse the game ID (id) from the request parameters
            const id = parseInt(req.params.id, 10);
            // Extract updated data (name, type, desc, diff) from the request body
            const { name, type, desc, diff } = req.body;
            // Update the game entry by calling the gameService
            const success = await gameService.updateGame(id, { name, type, desc, diff });
            // If the game entry does not exist or no changes were made, respond with 404 (Not Found)
            if (!success) {
                return res.status(404).json({ message: 'Game not found or no changes made' });
            }
            // Respond with a success message and HTTP status 200 (OK)
            res.status(200).json({ message: 'Game updated successfully' });
        } catch (e) {
            // If an error occurs, log the error and respond with status 500 (Internal Server Error)
            console.error('Error updating game', e);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // Handle the request to delete a game
    async deleteGame(req, res) {
        try {
            // Parse the game ID (id) from the request parameters
            const id = parseInt(req.params.id, 10);
            // Delete the game entry by calling the gameService
            const success = await gameService.deleteGame(id);
            // If the game entry is not found, respond with 404 (Not Found)
            if (!success) {
                return res.status(404).json({ message: 'Game not found' });
            }
            // Respond with a success message and HTTP status 200 (OK)
            res.status(200).json({ message: 'Game deleted successfully' });
        } catch (e) {
            // If an error occurs, log the error and respond with status 500 (Internal Server Error)
            console.error('Error deleting game', e);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

// Export an instance of the GameController class for use in routes
module.exports = new GameController();