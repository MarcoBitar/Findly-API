# Findly-API

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Database Structure](#database-structure)
4. [Getting Started](#getting-started)
5. [Prerequisites](#prerequisites)
6. [Installation](#installation)
7. [Usage](#usage)

---

## Project Overview
**Findly** is a comprehensive API designed to entertain users by solving riddles and getting clues to find hidden treasures in other websites.

## Features
- User management and authentication.
- Game management and scoring.
- Treasure verification and collection.
- Reaching achievements.
- Track user performance on games and pinning the top performers on a leaderboard.
- CRUD operations on relationships between users, games, treasures, clues, achievements and their relationships.

## Database Structure
Findly's database consists of 10 tables that store data for users, games, treasures, clues, achievements and their relationships. Here’s an overview:

1. **Users** - Stores user information and authentication data.
2. **Games** - Details about gmes/riddles user can solve.
3. **Treasures** - Weekly treasures that users must find.
4. **CLues** - Hints to where treasures could be hidden.
5. **Achievements** - Badges that users can get after accomplishing a milestone.
6. **Leaderboards** - Daily leaderboards that classifies users who found certain treasures.
7. **Users-Treasures** - Links users to specific treasures they have found.
8. **Users-Achievements** - Tracks user's milestones.
9. **Games-Users** - Links games to users.
10. **Games-Clues** - Links games to clues.

---

## Getting Started
Follow these instructions to set up and run the Findly project locally.

### Prerequisites
- **Node.js** and **npm**: Make sure you have Node.js (v14 or later) and npm installed.
- **MySQL**: A MySQL server instance for database management.
- **Git**: To clone and manage the repository.

### Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/MarcoBitar/Findly-API
    ```

2. **Install dependencies**:
    The project relies on several key packages. To install them, run:

    ```bash
    npm install
    ```
    - **dotenv**
    - **express**
    - **express-validator**
    - **moment**
    - **mysql2**
    - **nodemon**

3. **Set up environment variables**:
    - Create a `.env` file in the root directory.
    - Add the following configurations:
      ```plaintext
      DB_HOST=your_db_host
      DB_USER=your_db_user
      DB_PASSWORD=your_db_password
      DB_NAME=your_db_name
      PORT=your_preferred_port
      ```

4. **Initialize the Database**:
   Use the database schema file provided (Findly(DB)) to create tables and initialize your MySQL database.

### Usage
To start the server, run:
```bash
npm run dev