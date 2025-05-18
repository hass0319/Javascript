// Build a simple app where the user can:
//   Enter names and grades for students
//   Store them in arrays
//   Display all students and their grades
//   Show average grade
//   Show highest and lowest grade

const prompt = require("prompt-sync")({ sigint: true });

let nameBase = [];
let gradeBase = [];

let adding = true;
while (adding) {
  let studentName = prompt("Enter your name: ");
  let studentGrade = parseFloat(prompt("Enter your grade in percent (%): "));

  nameBase.push(studentName);
  gradeBase.push(studentGrade);

  console.log(
    `your name is => ${studentName} and your grade is ${studentGrade}%`
  );
  let again = prompt("Do you want to add another name?(y/n): ").toLowerCase();
  for (let i = 0; i < nameBase.length; i++) {
    console.log(`${nameBase[i]}:  ${gradeBase[i]}`);

    if (again === "no" || again === "n") {
      adding = false;
    }
  }

  let sum = 0;
  for (let j = 0; j < gradeBase.length; j++) {
    sum += gradeBase[j];
  }
  let average = sum / gradeBase.length;

  console.log(`Average Grades: ${average}%`);

  let highest = Math.max(...gradeBase);
  let lowest = Math.min(...gradeBase);

  let highIndex = gradeBase.indexOf(highest);
  let lowIndex = gradeBase.indexOf(lowest);

  console.log(`Highest Grade: ${nameBase[highIndex]} ${gradeBase[highIndex]}`);
  console.log(`lowest Grade: ${nameBase[lowIndex]} ${gradeBase[lowIndex]}`);
}
