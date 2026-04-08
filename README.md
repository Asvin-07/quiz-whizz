# Quiz Whizz

An interactive quiz app built with React where users can test their knowledge, track their scores, and compete against their own history. All data is stored locally in the browser — no backend, no accounts.

Live demo: [Link](https://quiz-app-beta-flax.vercel.app/)

---

## Tech Stack

- **React 19** — component-based UI
- **Vite** — build tool and dev server
- **Tailwind CSS** — styling and dark mode
- **Framer Motion** — page and element animations
- **IndexedDB** (via `idb`) — persistent local storage for quiz history
- **React Router v7** — client-side routing

---

## Features

**Quiz engine**
- 10 questions per session — 5 multiple choice and 5 integer-type
- 30-second timer per question; auto-advances if time runs out
- Instant right/wrong feedback with sound effects on every answer
- Animated progress bar showing how far through the quiz you are

**Scoreboard**
- All attempts are saved locally using IndexedDB, so they persist across page refreshes
- Attempts are ranked by score, with medals shown for the top 3
- One-click reset to clear the full history

**UI**
- Dark and light mode toggle, with preference saved between sessions
- Smooth transitions between questions using Framer Motion
- Fully responsive — works on mobile, tablet, and desktop

---

## Project Structure

```
quiz-whizz/
├── public/
│   └── sounds/
│       ├── correct.mp3
│       └── incorrect.mp3
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── ThemeToggle.jsx     # Dark/Light mode toggle component
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with navigation
│   │   ├── Quiz.jsx            # Core quiz engine (timer, scoring, feedback)
│   │   └── Scoreboard.jsx      # Quiz history and leaderboard
│   ├── App.jsx                 # Root component, routing and global theme state
│   ├── App.css
│   ├── index.css
│   ├── main.jsx                # React DOM entry point
│   ├── db.js                   # IndexedDB abstraction (save, get, clear history)
│   └── quizData.js             # Static question bank
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## Running Locally

Make sure you have [Node.js](https://nodejs.org/) (LTS) and [Git](https://git-scm.com/) installed.

```sh
git clone https://github.com/Asvin-07/quiz-whizz.git
cd quiz-whizz
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Contributing

1. Fork the repository
2. Create a branch (`git checkout -b your-feature`)
3. Commit your changes (`git commit -m "your message"`)
4. Push and open a Pull Request

For bugs or feature requests, open an issue on the [Issues page](https://github.com/Asvin-07/quiz-whizz/issues).

---

## License

MIT — see [LICENSE](LICENSE) for details.

## Contact

rishabnigam02@gmail.com
