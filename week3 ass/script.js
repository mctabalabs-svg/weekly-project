// Day3 Ass
const students = [
  { name: "Amina", marks: [78, 82, 91, 66] },
  { name: "Brian", marks: [55, 49, 61, 58] },
  { name: "Cynthia", marks: [88, 90, 84, 92] },
  { name: "David", marks: [40, 35, 52, 47] },
  { name: "Elsa", marks: [70, 73, 68, 75] }
];

const report = [];
let passCount = 0;
let failCount = 0;

// Top/Lowest students
let topStudent = null;
let lowestStudent = null;

// loop for the sum of each student
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let sum = 0;

  //loop for the  Average of each student
  for (let r= 0; r< student.marks.length; r++) {
    sum =sum + student.marks[r];
  }
  let average = sum / student.marks.length;

  // Assign Grade
  let grade;
  if (average >= 80){
     grade = "A";
 } else if (average >= 70){
     grade = "B";
 }else if (average >= 60){
     grade = "C";
}else if (average >= 50) {
    grade = "D";
 } else {
     grade = "E";
}

  // Assign Status
let status ;
if(average >= 60 ){
   status ="PASS"
    passCount++;
 } else {
    status = "Fail"
    failCount++;
 }
 
  // Create report object
  const studentReport = {
    name: student.name,
    average: average,
    grade: grade,
    status: status
  };
  report.push(studentReport);

  //  Top/Lowest (initialize with first student or compare)
  if (!topStudent || average > topStudent.average) topStudent = studentReport;
  if (!lowestStudent || average < lowestStudent.average) lowestStudent = studentReport;

  // Print individual row
  console.log(`${studentReport.name}: Avg ${studentReport.average} | Grade ${studentReport.grade} | ${studentReport.status}`);
}

// Print Summary
console.log("\nClass Summary:");
console.log(`Students: ${students.length}`);
console.log(`Pass: ${passCount}`);
console.log(`Fail: ${failCount}`);
console.log(`Top Student: ${topStudent.name} (${topStudent.average})`);
console.log(`Lowest Student: ${lowestStudent.name} (${lowestStudent.average})`);

