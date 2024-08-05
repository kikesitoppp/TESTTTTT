// Seleccionar elementos del DOM
const titleElement = document.getElementById('title');
const startButton = document.getElementById('start-button');
const questionsContainer = document.getElementById('questions-container');
const resultsContainer = document.getElementById('results-container');

// Ocultar el título y mostrar el botón de inicio
titleElement.style.display = 'none';
startButton.style.display = 'block';

// Iniciar el cuestionario al hacer clic en el botón de inicio
startButton.addEventListener('click', function() {
  startButton.style.display = 'none';
  titleElement.style.display = 'block';
  setTimeout(function() {
    titleElement.style.display = 'none';
    questionsContainer.style.display = 'block';
    showQuestion();
  }, 5000);
});

// Función para mostrar la pregunta actual
let currentQuestion = 0;
let correctAnswers = 0;
const questions = [
  {
    text: '¿Cuál es mi nombre completo?',
    type: 'text',
    correctAnswer: 'DENIS ENRIQUE BENAVIDES CAIPE'
  },
  {
    text: '¿Cuál es la fecha de mi nacimiento en formato DD/MM/AAAA?',
    type: 'text',
    correctAnswer: '13/04/2004'
  },
  {
    text: '¿Cuál es la fecha de nuestro cumple meses o aniversario?',
    type: 'number',
    correctAnswer: 24
  },
  {
    text: '¿Cuál es mi equipo favorito?',
    type: 'elect',
    options: ['Bayer Munich', 'Bayern Munchen', 'Bayern Munich', 'Bayern de Múnich'],
    correctAnswer: 'Bayern de Múnich'
  },
  {
    text: '¿Cuál es mi jugador favorito?',
    type: 'text',
    correctAnswer: 'NEYMAR'
  },
  {
    text: '¿Dónde fue nuestro primer beso?',
    type: 'elect',
    options: ['Universidad', 'Boulevard', 'Coctiki', 'Parque'],
    correctAnswer: 'Coctiki'
  },
  {
    text: '¿Cuáles son las dos palabras que más nos hemos dicho en nuestros chats?',
    type: 'text',
    correctAnswer: 'TE QUIERO'
  }
];

function showQuestion() {
  const questionElement = document.createElement('p');
  questionElement.textContent = questions[currentQuestion].text;
  questionsContainer.appendChild(questionElement);

  if (questions[currentQuestion].type === 'text') {
    const inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('class', 'input-field');
    questionsContainer.appendChild(inputField);
  } else if (questions[currentQuestion
