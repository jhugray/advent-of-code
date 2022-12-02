fs = require('fs');

function mostCalories() {
  const elfCalories = fs.readFileSync('22D1input.txt', 'utf8').split('\n\n');
  // const elfCalories = fs.readFileSync('22D1exampleinput.txt', 'utf8').split('\n\n');

  const calsPerElf = elfCalories.map(function(elf) {
    return elf.split('\n').map(function(cals) {
      if ( isNaN(parseInt(cals))) {
       return 0;
      };
      return parseInt(cals);
    }).reduce(function(total,num){
      return total + num; 
    }, 0);
  })
  // console.log(calsPerElf);
  
  const elfMostCalories = Math.max(...calsPerElf);
  console.log('The elf carrying the most calories has ' + elfMostCalories + ' calories.')

  //part 2
  calsPerElf.sort();
  const top3Elves = calsPerElf.pop()+calsPerElf.pop()+calsPerElf.pop();
  console.log('The top 3 elves are carrying ' + top3Elves + ' calories');
}




mostCalories(); 