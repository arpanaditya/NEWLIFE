
(


  function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === "a"){
        // add to the number of correct answers
        numCorrect=numCorrect+2;
        }
        else if (userAnswer === "b") {
numCorrect++;
        }
      // if answer is wrong or blank

    });
var message;
var level;
if(numCorrect<=3){
   level = 0;
 message = "well";
}
else if(numCorrect>3 && numCorrect<=5){
 level = 1;
 message = "little tension";
}
else if(numCorrect>5 && numCorrect<=10){
   level = 2;
   message = "first stage depression";
}

else if(numCorrect>10 && numCorrect<=15){
 level = 3;
   message = "second stage depression";
}
else if(numCorrect>15 && numCorrect<=18){
   level = 4;
   message = "severe";
}
else if(numCorrect>18 && numCorrect<=20){
  level = 5;
  message = "seek medical health asap";
}

window.alert("Your level of depression is: "+ level + " ("+message+")" )
    // show number of correct answers out of total
    // resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    // if(numCorrect<=2){
      window.open("remedies.html");
    // }
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1: Do you experience anxiety, irritability, apathy, moodswings?",
      answers: {
        a: "Yes, very often",
        b: "Yes, sometimes",
        c: "No"
      },


    },
    {
      question: "2: Do you feel loss of interest, hopelessness and sadness?",
      answers: {
        a: "Yes, very often",
        b: "Yes, sometimes",
        c: "No"
      },

    },
    {
      question: "3: Do you have sleep problems?",
      answers: {
        a: "Yes, either of early awakening or excess sleepiness",
        b: "Yes, insomnia",
        c: "No",

      },

    },
    {
      question: "4: Do you have hunger problems?",
      answers: {
        a: "Yes, excessive hunger, fatigue",
        b: "Yes, loss of appetite",
        c: "No",

      },

    },
    {
      question: "5: Which cognitive problem do you have?",
      answers: {
        a: "Lack of concentration, slowness in activity",
        b: "Suicidal thoughts",
        c: "None",

      },

    },
    {
      question: "6: Have you lost or gained weight recently?",
      answers: {
        a: "Yes, gained weight",
        b: "Yes, lost weight",
        c: "No",

      },

    },
    {
      question: "7: Have you experienced bodily changes lately?",
      answers: {
        a: "Yes, increase in  headache, stomachache, backpain",
        b: "Yes, offensive sexual behaviour",
        c: "No",

      },

    },
    {
      question: "8: Are you taking certain medicines?",
      answers: {
        a: "Yes, antidepressants",
        b: "Yes, sleeping pills",
        c: "None of the above",

      },

    },
    {
      question: "9: How are your relations with family?",
      answers: {
        a: "Good to very good",
        b: "Moderate",
        c: "Bad to very bad",

      },

    },
    {
      question: "10: How's your economical and social state?",
      answers: {
        a: "Both bad",
        b: "One is bad, one is good",
        c: "Both good",

      },

    },
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
