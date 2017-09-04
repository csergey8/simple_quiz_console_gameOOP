//Build function contructor

function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);

var q2 = new Question('What\'s the name of this courese\'s teacher?', ['John', 'Michael', 'Jonas'], 2);

var q3 = new Question('What does best decribe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

