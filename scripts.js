// scripts.js
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
    const answers = { q1: 'a' }; // Correct answers
    const formData = new FormData(this);
    for (const [name, value] of formData.entries()) {
        if (value === answers[name]) {
            score++;
        }
    }
    alert('Your score is: ' + score);
});