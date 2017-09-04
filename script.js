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

var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);

var q2 = new Question('What\'s the name of this courese\'s teacher?', ['John', 'Michael', 'Jonas'], 2);

var q3 = new Question('What does best decribe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

var questions = [q1, q2, q3];

var n = Math.floor((Math.random() * questions.length));
