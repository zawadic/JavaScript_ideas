const categoryBtns = document.querySelectorAll('.category-btn');
const quizScreen = document.getElementById('quiz-screen');
const categoryScreen = document.getElementById('category-screen');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const timerEl = document.getElementById('timer');
const scoreScreen = document.getElementById('score-screen');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

const categories = {
    cars: [
        {
            question: "Which is the fastest car in the world?",
            options: ["Bugatti Chiron Supersport 300+", "Koenigsegg Jesko absalute", "Hennessey Venom GT", "SSC Tuatara"],
            answer: "Koenigsegg Jesko absalute"
        },
        // More car questions...
    ],
    bikes: [
        {
            question: "Which is the fastest bike in the world?",
            options: ["Dodge Tomahawk", "Kawasaki Ninja H2R", "MTT Turbine 420rr", "Suzuki Hayabusa"],
            answer: "Dodge Tomahawk"
        },
        // More bike questions...
    ]
};

function startQuiz(category) {
    currentCategory = category;
    categoryScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const currentQuestion = categories[currentCategory][currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'btn';
        button.textContent = option;
        button.addEventListener('click', selectAnswer);
        optionsEl.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedAnswer = e.target.textContent;
    const correctAnswer = categories[currentCategory][currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < categories[currentCategory].length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Time left: ${timeLeft}s`;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    quizScreen.style.display = 'none';
    scoreScreen.style.display = 'block';
    scoreEl.textContent = score;
}

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => startQuiz(btn.getAttribute('data-category')));
});

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 10;
    categoryScreen.style.display = 'block';
    scoreScreen.style.display = 'none';
});
