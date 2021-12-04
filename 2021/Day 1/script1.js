fs = require('fs');

function depthIncCount() {
  let depthIncreaseCount = 0
  // const depths = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
  // const depths = fs.readFileSync('exampleinput.txt', 'utf8').split('\n');
  const depths = fs.readFileSync('day1input.txt', 'utf8').split('\n');

  for (var i = 0; i < depths.length - 1; i++) {
    if (parseInt(depths[i]) < parseInt(depths[i+1])) {
      depthIncreaseCount++;
    }
  }
  console.log(depthIncreaseCount)
}

depthIncCount();
