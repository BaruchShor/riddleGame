# 🧩 Riddle Game - Advanced Interactive Puzzle Game

An interactive and advanced riddle game built with Node.js, JavaScript, and Supabase database. The game features a CLI user interface, user management system, personal record tracking, and a complete CRUD system for managing riddles and players.

## 🎯 Key Features

- 🎮 **Interactive Gameplay** - User-friendly CLI interface
- 👤 **User Management** - Create, update, and delete players with authentication
- ❓ **Riddle Management** - Complete CRUD system for riddles
- ⏱️ **Time Tracking** - Record response times for each riddle
- 📊 **Statistics** - Track personal records and performance
- 🔐 **Password Encryption** - bcrypt for secure data protection
- 🌐 **RESTful API** - Express.js server with complete endpoints
- 🗄️ **Database** - Supabase PostgreSQL integration

## 🏗️ Architecture

The project is built using modular architecture with separation of concerns:

```
riddleGame/
│
├── 📁 client/                    # Client-side (CLI Application)
│   ├── 📁 CRUD/                 # Client CRUD functions
│   │   ├── CRUDRiddleGame.js   # Core API functions
│   │   ├── crudPlayer.js       # Player management
│   │   └── crudRiddle.js       # Riddle management
│   ├── 📁 gameManager/         # Game management
│   │   ├── displaySystem.js   # Menu system
│   │   ├── gameManager.js      # Game logic
│   │   └── riddleListCreator.js # Riddle list creation
│   └── 📁 models/              # Models and classes
│       ├── Player.js           # Player class
│       ├── Riddle.js           # Riddle class
│       └── readline.js         # Input interface
│
├── 📁 server/                   # Server-side (API Server)
│   ├── 📁 routes/              # API routes
│   │   └── router.js           # Main routes
│   ├── 📁 services/            # Business services
│   │   └── servies.js          # Database functions
│   └── server.js               # Express server
│
└── 📁 data/                    # Game data
    └── riddlesData.js          # Riddles repository
```

## 🔧 Technologies

- **Frontend**: Node.js CLI Application
- **Backend**: Express.js REST API
- **Database**: Supabase (PostgreSQL)
- **Security**: bcrypt (password encryption)
- **HTTP Client**: fetch API
- **Input Handling**: readline-sync

## 🚀 Installation and Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn
- Supabase account

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/BaruchShor/riddleGame.git
cd riddleGame
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
Create a `.env` file in the server directory:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3005
```

4. **Start the server**
```bash
cd server
node server.js
```

5. **Run the client**
```bash
cd client
node displaySystem.js
```

## 🎮 How to Use

### Main Menu
```
1. Play riddle game
2. Riddle actions
3. Player actions
4. Exit
```

### Game Flow
1. **Enter player name** - System searches for or creates a new player
2. **Solve riddles** - Player answers riddles under time pressure
3. **Record times** - System records response times
4. **Update record** - Personal best is updated automatically
5. **Show statistics** - Performance summary at game end

## 📚 API Documentation

### Main Endpoints

#### Players
- `GET /players` - Get all players
- `GET /players/name/:name` - Find player by name
- `POST /players` - Create new player
- `PUT /players` - Update player
- `DELETE /players` - Delete player

#### Riddles
- `GET /riddles` - Get all riddles
- `POST /riddles` - Create new riddle
- `PUT /riddles` - Update riddle
- `DELETE /riddles` - Delete riddle

## 🔍 Core Components

### Player Class
```javascript
class Player {
    constructor(playerData)
    recordTime(time)     // Record response time
    showStats(name)      // Display statistics
    // Properties: id, name, role, record
}
```

### Riddle Class  
```javascript
class Riddle {
    constructor(riddleData)
    ask()               // Display riddle and get answer
    // Properties: id, question, answer, options, correctAnswer
}
```

### Main CRUD Functions
```javascript
// client/CRUD/CRUDRiddleGame.js
getOBJList(path)        // Read data
createOBJ(path, obj)    // Create record
updateOBJ(path, obj)    // Update record  
deleteOBJ(path, obj)    // Delete record
```

### Game Management
```javascript
// client/gameManager/gameManager.js
displayGame()           // Main game function
// client/gameManager/displaySystem.js  
displaySystem()         // Menu system
```

## 🗄️ Database Structure

### Players Table
```sql
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT,
    role VARCHAR(50) DEFAULT 'user',
    record INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### Riddles Table
```sql
CREATE TABLE riddles (
    id SERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    options JSONB,
    difficulty VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);
```

## 🔒 Security

- **Password Encryption**: bcrypt with salt rounds = 12
- **Input Validation**: Input checking and injection prevention
- **Role Separation**: User and admin roles
- **Error Handling**: Advanced error processing

## 🎯 Usage Example

```bash
Welcome to Riddle Game!
Please enter your name: John

Loading riddles...
🧩 Riddle 1/5: What has keys but can't open locks?
Your answer: keyboard
✅ Correct! Time: 3.2 seconds

🧩 Riddle 2/5: I speak without a mouth and hear without ear...
Your answer: echo  
✅ Correct! Time: 2.8 seconds

📊 Game Statistics for John:
- Total Time: 15.4 seconds
- Average Time: 3.08 seconds  
- Best Time: 2.1 seconds
- New Personal Record! 🏆
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📝 License

This project is distributed under the ISC License - free to use, modify, and distribute.

## 🏆 Advanced Features

- **Full Modularity**: Each component operates independently
- **Easy Extensions**: Ability to add new riddles and game types
- **Optimal Performance**: Using async/await for asynchronous operations
- **Advanced UX**: Intuitive and user-friendly CLI interface
- **Robustness**: Comprehensive error handling and edge case management

## 📞 Contact

**Developer**: Baruch Shor  
**GitHub**: [@BaruchShor](https://github.com/BaruchShor)  
**Project**: [riddleGame](https://github.com/BaruchShor/riddleGame)

---

🧠 **Ready for a challenge? Run the game and test your riddle-solving skills!** 🎯
