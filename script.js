//using of IFFY for private

(function () {

  //Build function contructor

  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  //Add prototype method

  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ') ' + this.answers[i]);
    }
  };

  //Add another prorotype method

  Question.prototype.checkAnswer = function (ans, callback) {
    var sc;
    if (ans === this.correct) {
      console.log('Answer correct');
      sc = callback(true);
    } else {
      console.log('Wrong answer');
      sc = callback(false);
    }
    this.displayScore(sc);
  }

  Question.prototype.displayScore = function (score) {
    var br = '<br>';
    console.log('Your current score: '+ score);
  }

  var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);

  var q2 = new Question('What\'s the name of this courese\'s teacher?', ['John', 'Michael', 'Jonas'], 2);

  var q3 = new Question('What does best decribe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

  var questions = [q1, q2, q3];

  //Add closure
  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    }
  }

  var keepScore = score();



  function nextQuestion() {

    var n = Math.floor((Math.random() * questions.length));

    questions[n].displayQuestion();

    // Add promt
    var answer = prompt('Please select the correct answer.');


    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }

  nextQuestion();


})();
