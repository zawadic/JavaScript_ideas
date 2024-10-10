function checkAnswer() {
    const form = document.getElementById('quiz-form');
    const result = document.getElementById('result');
    const selectedAnswer = form.querySelector('input[name="answer"]:checked');
    const nextExerciseButton = document.getElementById('next-exercise');

    if (selectedAnswer) {
        if (selectedAnswer.value === 'correct') {
            result.textContent = 'Congratulation!';
            result.style.color = 'green';
            nextExerciseButton.classList.remove("hidden")
        } else {
            result.textContent = 'Wrong answer, try again.';
            result.style.color = 'red';
            //nextExerciseButton.classList.add('hidden');
        }
    } else {
        result.textContent = 'Please select an answer.';
        result.style.color = 'orange';
        //nextExerciseButton.classList.add('hidden');
    }
}
function goNextExercise() {
    window.location.href = 'index2.html';
}
function gotoNextExercise() {
    window.location.href = 'index3.html';
}