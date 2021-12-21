fs = require('fs');

function positionFinder() {
  let horizontalP = 0
  let depth = 0
  let exampleInput = 'exampleinput2.txt'
  let input = 'day2input.txt'
  // const positions = fs.readFileSync(exampleInput, 'utf8').split('\n');
  const positions = fs.readFileSync(input, 'utf8').split('\n');

  for (var i = 0; i < positions.length; i++) {
    parts = positions[i].split(' ');
    if (parts[0] === 'forward') {
      horizontalP += parseInt(parts[1]);
    } else if (parts[0] === 'down') {
      depth += parseInt(parts[1]);
    } else if (parts[0] === 'up') {
      depth -= parseInt(parts[1]);
    } else {
      console.log('Ooops, wtf just happened?');
    }
  };
  const answer = horizontalP * depth;
  console.log('The solution for part 1 is: ' + answer)
}

function positionFinderPtTwo() {
  let horizontalP = 0
  let depth = 0
  let aim = 0
  let exampleInput = 'exampleinput2.txt'
  let input = 'day2input.txt'
  // const positions = fs.readFileSync(exampleInput, 'utf8').split('\n');
  const positions = fs.readFileSync(input, 'utf8').split('\n');

  for (var i = 0; i < positions.length; i++) {
    parts = positions[i].split(' ');
    if (parts[0] === 'forward') {
      horizontalP += parseInt(parts[1]);
      depth += (aim * parseInt(parts[1]));
    } else if (parts[0] === 'down') {
      aim += parseInt(parts[1]);
    } else if (parts[0] === 'up') {
      aim -= parseInt(parts[1]);
    } else {
      console.log('Ooops, wtf just happened?');
    }
  };
  const answer = horizontalP * depth;
  console.log('The solution for part 2 is: ' + answer)
}



// positionFinder();
positionFinderPtTwo();

