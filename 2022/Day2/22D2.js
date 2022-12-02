fs = require('fs');

function score(round) {
  switch(round) {
    case 'R R' : return 1+3
    case 'R P' : return 2+6
    case 'R S' : return 3+0
    case 'P R' : return 1+0
    case 'P P' : return 2+3
    case 'P S' : return 3+6
    case 'S R' : return 1+6
    case 'S P' : return 2+0
    case 'S S' : return 3+3
  }
}

function rps() {
  const rounds = fs.readFileSync('22D2input.txt', 'utf8').split('\n');
  // example input for testing:
  // const rounds = fs.readFileSync('22D2exampleinput.txt', 'utf8').split('\n');

  const scores = rounds.map(function(round){
    return round.replace(/[ABCXYZ]/g, function(char){
      return {
        'A':'R',
        'B':'P',
        'C':'S',
        'X':'R',
        'Y':'P',
        'Z':'S'
      }[char]
    })
  }).map(score)
  console.log(scores);
  const totalScore = scores.reduce(function(total,num){
    return total + num; 
  }, 0);
  console.log('Your total score is ' + totalScore);
}

rps();