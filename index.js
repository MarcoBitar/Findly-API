//server.js
const express = require('express');
const dotenv = require('dotenv');

// Importing route modules
const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const treasureRoutes = require('./routes/treasureRoutes');
const achievementRoutes = require('./routes/achievementRoutes');
const clueRoutes = require('./routes/clueRoutes');
const gameUserRoutes = require('./routes/game-userRoutes');
const userTreasureRoutes = require('./routes/user-treasureRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const userAchievementRoutes = require('./routes/user-achievementRoutes');
const gameClueRoutes = require('./routes/game-clueRoutes');

// Configuring dotenv to use environment variables
dotenv.config();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Defining routes for various endpoints
app.use('/Findly/users', userRoutes);
app.use('/Findly/games', gameRoutes);
app.use('/Findly/treasures', treasureRoutes);
app.use('/Findly/achievements', achievementRoutes);
app.use('/Findly/clues', clueRoutes);
app.use('/Findly/games-users', gameUserRoutes);
app.use('/Findly/users-treasures', userTreasureRoutes);
app.use('/Findly/leaderboards', leaderboardRoutes);
app.use('/Findly/users-achievements', userAchievementRoutes);
app.use('/Findly/games-clues', gameClueRoutes);

// Root route for the API
app.get('/', (req, res) => {
    res.send('Welcome to the Findly API');
});

// Middleware to handle undefined routes (404 errors)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

// Global error handler for unhandled errors
app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err);
    res.status(500).json({ message: 'Internal server error' });
});

// Defining the port from the environment variables
const PORT = process.env.PORT;

// Starting the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});