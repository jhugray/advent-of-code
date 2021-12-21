fs = require('fs');

function powerConsumption() {
  let gamma = 0;
  let epsilon = 0;
  let powerConsumption = 0;
  let exampleInput = 'exampleinput3.txt'
  let input = 'day3input.txt'
  const diagnostics = fs.readFileSync(exampleInput, 'utf8').split('\n');
  // const diagnostics = fs.readFileSync(input, 'utf8').split('\n');

  for (var i = 0; i < diagnostics.length - 1; i++) {
    gamma = diagnostics
  }
}

powerConsumption();