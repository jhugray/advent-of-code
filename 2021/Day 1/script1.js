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
  console.log('The solution for part 1 is: ' + depthIncreaseCount)
}



function windowDepthIncCount() {
  let windowDepthIncreaseCount = 0
  // const depthsData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
  // const depthsData = fs.readFileSync('exampleinput.txt', 'utf8').split('\n');
  const depthsData = fs.readFileSync('day1input.txt', 'utf8').split('\n');
  const depths = depthsData.map(depthsData => parseInt(depthsData))

  for (var i=0; i < depths.length -1; i++) {
    let windowA = depths[i] + depths[i+1] + depths[i+2];
    let windowB = depths[i+1] + depths[i+2] + depths[i+3];
    if ((windowA) < (windowB)) {
      windowDepthIncreaseCount++;
    }
  }
  console.log('The solution for part 2 is: ' + windowDepthIncreaseCount)
}

depthIncCount();
windowDepthIncCount();