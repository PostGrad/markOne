let readlineSync = require('readline-sync')

let score = 0;
let highScores = [{name:'Pranay', score:5},
                  {name:'Shailesh', score:4}]
let userName = readlineSync.question('What is your name? ');

console.log('Hi '+ userName + ', Welcome to "Do you know Pranay?" quiz.');

function play(question, answer){
  let userAnswer = readlineSync.question(question);

    if(userAnswer.toUpperCase()===answer.toUpperCase()){
      console.log('right!');
      score++;      
    }
    else
      console.log("That's wrong buddy!");
    
    console.log('current score: ', score);
    console.log('---------------------------');
}

let questions = [{question:'What is my nickname? ', answer:'Ravi' },
{question:'Where do I live? ', answer:'Anand'},
{question:'Where do I work? ', answer:'BVM'},
{question:'Who is my bestie? ', answer:'Shailesh'},
{question:'Who is my best superhero? ', answer:'Thor'}]

for(question of questions){
  play(question.question, question.answer);
}

console.log('Yay, Your Final score is '+score);

console.log('Highest Scores till now: ')
for(hscore of highScores){
  console.log(`${hscore.name}: ${hscore.score} `);
}

console.log("Thank you for playing!")

console.log("If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.")
