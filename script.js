(function(){
  function question(){

    const output = [];


    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];
        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;
        myQuestions.forEach( (currentQuestion, questionNumber) => {
          const answerContainer = answerContainers[questionNumber];
          const selector = `input[name=question${questionNumber}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });


    resultsContainer.innerHTML = `Правильных ответов ${numCorrect} из ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Сколько может быть жен в 16 лет?",
      answers: {
        a: "1",
        b: "0",
        c: "2"
      },
      correctAnswer: "b"
    },
    {
      question: "Какой римской цыфры не существует??",
      answers: {
        a: "0",
        b: "1000",
        c: "10000"
      },
      correctAnswer: "a"
    },
    {
      question: "Алектрофобия это боязнь?",
      answers: {
        a: "Углов",
        b: "Куриц",
        c: "Видиоигр",
        d: "Карманов"
      },
      correctAnswer: "b"
    },
    {
      question: "Как далеко земля от солнца?",
      answers: {
        a: "124 442 км",
        b: "149 600 500 км",
        c: "44 502 222 км",
        d: "150 800 800 км"
      },
      correctAnswer: "b"
    },
    {
      question: "Какое существо жует желудком?",
      answers: {
        a: "Собака",
        b: "Козел",
        c: "Рак",
        d: "Комар"
      },
      correctAnswer: "c"
    },
    {
      question: "Что изабрели раньше?",
      answers: {
        a: "Фильм",
        b: "Ружьё",
        c: "Очки",
        d: "Часы"
      },
      correctAnswer: "d"
    }
  ];


  question();


  submitButton.addEventListener('click', showResults);
})();
