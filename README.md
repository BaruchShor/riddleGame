# 🧠 Riddle Game - A Console Puzzle Experience

## 🎯 Project Description

Riddle Game is a fully modular, console-based game built with **Node.js** and **JavaScript**, offering a fun way to solve brain-teasing riddles while tracking your response times. It's designed using clean OOP architecture and separation of concerns.

Players answer riddles under time pressure, and the system tracks performance and presents stats at the end. It uses custom-built classes and modules to manage players, riddles, input, and game flow.

---

## 🚀 Features

* 🎮 Interactive CLI gameplay.
* ❓ Riddle generation and management.
* ⏱️ Real-time response tracking.
* 📊 Summary statistics per game session.
* 🔄 Fully modular and extendable design.

---

## 🧱 Project Structure and Architecture

```
riddleGame/
│
├── app.js                    # Main entry point of the game
├── manager.js                # Game flow manager
├── riddleListCreator.js      # Riddle list builder from data
│
├── classes/                  # Class-based logic
│   ├── Player.js             # Player class
│   ├── Riddle.js             # Riddle class
│   └── readline.js           # Custom input module
│
└── riddles/                  # Stores all riddle content
    └── ImportRiddles.js      # Riddle data file
```

---

## 📂 Core Modules and Classes

### 🔧 `app.js`

> Entry point. Starts the game and manages initialization.

```js
import { gameStart } from "./manager.js";
gameStart();
```

### 🧠 `manager.js`

> Handles main game logic and game loop.

#### Exposed Functions:

* `export function gameStart()` - Starts the game.
* `function handleGame(player, riddles)` - Controls the flow of presenting riddles.
* `function finishGame(player)` - Prints final stats.

### 🧩 `riddleListCreator.js`

> Creates and returns a list of Riddle objects.

#### Exposed Function:

```js
export function riddlesList() : Riddle[]
```

Maps the raw riddle data into fully constructed `Riddle` instances.

### 👤 `Player.js`

> Represents a player with name and statistics.

```js
export class Player {
  constructor(name)
  saveResult(time: number): void
  getAverage(): number
  getResults(): number[]
  getName(): string
}
```

### ❓ `Riddle.js`

> Represents an individual riddle.

```js
export class Riddle {
  constructor(id, name, taskDescription, correctAnswer)
  getQuestion(): string
  checkAnswer(answer: string): boolean
}
```

### 🧾 `readline.js`

> Simple wrapper for console input.

```js
export function ask(question: string): string
```

Uses `readline-sync` for blocking input prompts.

### 📚 `riddles/ImportRiddles.js`

> Exports the riddle data array used by the game.

```js
export default [
  {
    id: 1,
    name: "Simple Riddle",
    taskDescription: "What has keys but can't open locks?",
    correctAnswer: "Keyboard"
  },
  ...
]
```

---

## 🔁 Game Flow

```text
Player enters name
     ↓
Riddle is shown
     ↓
Player enters answer
     ↓
Answer is validated
     ↓
Time is recorded
     ↓
Repeat until all riddles done
     ↓
Final stats printed
```

---

## 📥 Getting Started

### Prerequisites

* Node.js

### Installation

```bash
npm install
```

### Running the Game

```bash
node app.js
```

---

## 🧪 Example Output

```text
Welcome to the Riddle Game!
Enter your name: Ershi

1. I speak without a mouth...  → Answer: echo
✅ Correct! Time: 5.2s

2. What has to be broken... → Answer: egg
✅ Correct! Time: 4.8s

---
Game Over, Ershi!
Average Time: 5.0 seconds
All Answers Correct!
```

---

## 🛠️ Contributing

1. Fork the repo
2. Create your branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## 🪪 License

ISC License — free to use, modify, and share.

---

## ✨ Final Words

This project is a great example of OOP and modular design in Node.js. Its simplicity, combined with scalability and clear architecture, makes it perfect for learning and extension.

Want to challenge your mind? Run `node app.js` and get ready to riddle!
