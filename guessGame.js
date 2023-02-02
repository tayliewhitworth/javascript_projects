let secretValue = Math.floor(1 + Math.random() * 10).toString();

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const testNumber = (input) => {
  if (input === "quit") {
    process.stdout.write("Ok, see ya!\n");
  }

  if (!numbers.includes(input)) {
    process.stdout.write("Choose a number between 1 to 10!\nIs the number... ");
  } else if (input === secretValue) {
    process.stdout.write("Wow! You guessed it! Bye!\n");
    process.exit();
  } else {
    process.stdout.write("Nope, keep guessing!\nIs the number... ");
  }
};

process.stdout.write(
  'Can you guess the number between 1 and 10?\n(Write "quit" to give up.)\nIs the number... '
);

let playGame = (userInput) => {
  let input = userInput.toString().trim();
  testNumber(input);
};

process.stdin.on("data", playGame);
