const cards = document.querySelectorAll('.flashcard');
const cardAnswer = document.getElementById('card-answer');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    cardAnswer.textContent = card.dataset.answer;
  });
});

const answers = {
  q1: 'b',
  q2: 'c',
  q3: 'a'
};

const quizForm = document.getElementById('quiz-form');
const scoreOutput = document.getElementById('score-output');

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let score = 0;
  const total = Object.keys(answers).length;

  Object.entries(answers).forEach(([question, correctAnswer]) => {
    const selected = quizForm.elements[question].value;
    if (selected === correctAnswer) {
      score += 1;
    }
  });

  scoreOutput.textContent = `You scored ${score}/${total}. ${score === total ? 'Excellent work!' : 'Review missed topics and retry.'}`;
});
