const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {

  rl.question('What is an activity you like doing? ', (answer2) => {

    rl.question('What do you listen to while doing that? ', (answer3) => {

      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (answer4) => {

        rl.question('What is your favourite thing to eat for that meal? ', (answer5) => {

          rl.question('Which sport is your absolute favourite? ', (answer6) => {

            rl.question('What is your superpower? What are you amazing at? ', (answer7) => {
  

              console.log(`This is ${answer1}. An activity ${answer1} likes to do is ${answer2} while listening to ${answer3}. ${answer1}'s favourite meal time is ${answer4} and favour meal is ${answer5}. ${answer1}'s favourtie sport is ${answer6}. ${answer1}'s superpower is ${answer7}.`);

              rl.close();

            });
          });
        });
      });
    });
  });
});
