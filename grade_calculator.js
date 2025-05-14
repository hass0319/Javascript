const prompt = require("prompt-sync")({ sigint: true });

let restart = true;

while (true) {
  let studentName = prompt("Enter Your name: ");
  let grade;
  let score = parseFloat(prompt("Enter you grade from 0-100: "));

  switch (true) {
    case score > 0 && score > 100:
      console.log("Please enter a number from 0 to 100");
      break;
    case score >= 90 && score <= 100:
      grade = "A";
      console.log(
        `Hello ${studentName}, your score is ${score}% and your grade= ${grade}, you have passed.`
      );
      break;
    case score >= 80 && score < 90:
      grade = "B";
      console.log(
        `Hello ${studentName}, your score is ${score}% and your grade= ${grade}, you have passed.`
      );
      break;
    case score >= 70 && score < 80:
      grade = "C";
      console.log(
        `Hello ${studentName}, your score is ${score}% and your grade= ${grade}, you have passed.`
      );
      break;
    case score >= 60 && score < 70:
      grade = "D";
      console.log(
        `Hello ${studentName}, your score is ${score}% and your grade= ${grade}, you have passed.`
      );
      break;
    case score >= 50 && score < 60:
      grade = "E";
      console.log(
        `Hello ${studentName}, your score is ${score}% and your grade= ${grade}, you have passed.`
      );
      break;
    default:
      grade = "F";
      console.log(
        `Hello ${studentName}, your score is ${score}% and your grade= ${grade}, you have failed.`
      );
      break;
  }

  let again = prompt(
    "would you like to calculate your score again? (yes/no)"
  ).toLowerCase();

  if (again === "no" || again === "n") {
    restart = false;
    console.log(`Thank you ${studentName}, for using our calculator`);
  }
}
