# 📌 Quiz Whizz

Quiz Whizz is an interactive and engaging quiz platform designed to provide a seamless quiz-taking experience. Built with modern web technologies, it offers users an intuitive interface and real-time feedback while answering questions.

## 🚀 Features

1️⃣ Core Quiz Functionality

✅ Interactive Quiz System
- Users can attempt quizzes with multiple-choice and integer-type questions.
- Questions are displayed one at a time, making it user-friendly.
- Each question has instant feedback (correct/wrong).

✅ Scoring & Attempt Tracking
- Users' scores are calculated in real time.
- Number of correct answers and total questions are displayed at the end.

✅ Timer for Each Question
- Each question has a 30-second timer.
- If time runs out, the question is automatically skipped.

✅ Multiple Attempts
- Users can replay the quiz as many times as they want.
- Each attempt is stored for later viewing.

2️⃣ UI & User Experience (UX) Enhancements

✅ Light & Dark Mode Toggle 🌙☀️
- Users can switch between light mode and dark mode.
- The entire UI updates dynamically, including:
- Backgrounds
- Text colors
- Tables
- Buttons

✅ Playful UI Animations and Sound 🎭
- Smooth fade-in animations for question transitions.
- Hover effects on buttons to improve usability.
- Two different sound for correct and incorrect answers.

✅ Mobile-Friendly & Responsive 📱
- Fully responsive across all devices (mobiles, tablets, desktops).
- Uses Tailwind CSS for a clean, modern design.

✅ Navigation Between Screens
- Users can navigate between Home, Quiz, and Scoreboard seamlessly using React Router.

3️⃣ Scoreboard & Quiz History

✅ Scoreboard Feature 🏆
- Shows a ranked list of quiz attempts, sorted by highest score first.
- Displays score, total questions, and timestamp of each attempt.
- Top 3 players get 🥇🥈🥉 icons for rankings.

✅ Persistent Quiz History (IndexedDB) 🗂️
- All quiz attempts are saved locally using IndexedDB.
- Even after refreshing or closing the browser, users can still see their past attempts.

✅ Reset Scoreboard Button 🔄
- Users can reset their quiz history by clicking "Reset Score".
- This removes all saved attempts from IndexedDB

### ⚡ Fast and Optimized Performance
- Built with Vite for lightning-fast development and production builds.
- Minimal loading time for a seamless user experience.

## 🛠️ Running the App Locally

To set up and run the Quiz Whizz application locally, follow these steps:

### 1️⃣ Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/Asvin-07/quiz-whizz.git
cd quiz-whizz
```

### 3️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Start the Development Server
```sh
npm run dev
```

### 5️⃣ Open the App
- Open your browser and visit `http://localhost:5173` to start using the quiz app.

## 🚀 Deployment

The app is deployed on a hosting platform to make it accessible to users globally.

### 🌍 Live Demo
[Live Demo](https://quiz-app-beta-flax.vercel.app/)


## 🤝 Contributing
We welcome contributions! If you’d like to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact
For any inquiries or issues, feel free to reach out:
- GitHub Issues: [Issues Page](https://github.com/Asvin-07/quiz-whizz/issues)
- Email: rishabnigam02@gmail.com

