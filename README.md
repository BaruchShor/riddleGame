
# 🎮 Riddle Game

> *A minimalist terminal-based riddle game powered by JavaScript.*

---

## 🧠 Project Overview

This project is a modular Node.js CLI game designed to challenge the user with a series of riddles.  
While the gameplay is simple, the architecture behind the code follows best practices for modularity, maintainability, and separation of concerns.

---

## 📂 Project Structure

```
riddle-game/
├── app.js              # Application entry point
├── manager.js          # Core game manager (imported by app.js)
├── package.json        # Project metadata and dependencies
└── package-lock.json   # Dependency lock file
```

---

## ⚙️ Core Architecture

### 1. `app.js` – Entry Point
- This is the root file where execution begins.
- It imports and invokes the `game()` function from `manager.js`.
- Responsible for bootstrapping only – no logic is written here.

```js
import game from "./manager.js";
game();
```

### 2. `manager.js` – Game Manager
> (*You will need to review/modify based on actual content, which is not uploaded yet.*)

Expected to contain:
- All core gameplay logic
- Question prompting and answer handling
- Score tracking
- End-of-game evaluation

Functions might include:
- `initializeGame()` – Load riddles and setup variables
- `askQuestion(riddle)` – Present the riddle and collect user input
- `checkAnswer(userAnswer, correctAnswer)` – Validate user input
- `showResults()` – Display final score and feedback

This central controller orchestrates the game flow.

---

## 🔁 Execution Flow

```
[ app.js ]
     │
     ▼
[ Import manager.js ]
     │
     ▼
[ game() ]
     ├── Load riddles (static or dynamic)
     ├── For each riddle:
     │     ├── Display question
     │     ├── Capture input
     │     └── Check correctness
     └── Summarize score
```

---

## 🔧 Dependencies

- **readline-sync**: Used to capture input from the terminal synchronously.

```bash
npm install readline-sync
```

---

## 🧱 Architectural Principles

| Principle            | Implementation                                                                 |
|----------------------|---------------------------------------------------------------------------------|
| **Separation of Concerns** | `app.js` only initializes, `manager.js` controls logic                    |
| **Single Responsibility**  | Each function has one job (ask, check, score, etc.)                       |
| **Modularity**             | Logic isolated in its own module (`manager.js`)                           |
| **Scalability**            | Easy to add new question types, timers, difficulty levels                 |
| **Testability**            | Clear units make it test-friendly                                         |

---

## 💡 Suggested Enhancements

- Add a **riddle database** (JSON, API, or DB-based)
- Introduce **difficulty levels**
- Include **timeout mechanism** for each riddle
- Add **score persistence** (write to file or database)
- Optional: Convert to **GUI or Web version**

---

## 🚀 Run the Game

```bash
git clone https://github.com/BaruchShor/riddleGame.git
cd riddleGame
npm install
node app.js
```

---

## 📬 Author

**Baruch Zvi Shor**  
📧 e0548597918@gmail.com  
🔗 [GitHub Profile](https://github.com/BaruchShor)

---
