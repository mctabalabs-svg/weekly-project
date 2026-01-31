const students = [
  { name: "Amina", marks: [78, 82, 91, 66] },
  { name: "Brian", marks: [55, 49, 61, 58] },
  { name: "Cynthia", marks: [88, 90, 84, 92] },
  { name: "David", marks: [40, 35, 52, 47] },
  { name: "Elsa", marks: [70, 73, 68, 75] }
];

// Helper: calculate average
function calculateAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum / marks.length;
}

// Helper: assign grade
function assignGrade(average) {
  if (average >= 80) return "A";
  else if (average >= 70) return "B";
  else if (average >= 60) return "C";
  else if (average>= 50) return "D";
  else return "E";
}

// Helper: assign status
function assignStatus(average) {
  return average>= 60 ? "PASS" : "FAIL";
}

// Build report for all students
function buildReport(students) {
  const report = [];
  for (let i = 0; i < students.length; i++) {
    const average= calculateAverage(students[i].marks);
    const grade = assignGrade(average);
    const status = assignStatus(average);

    report.push({
      name: students[i].name,
      average: average,
      grade: grade,
      status: status
    });
  }
  return report;
}

// Print report + summary
function printReport(report) {
  // Print each student
  for (let i = 0; i < report.length; i++) {
    console.log(
      `${report[i].name}: Avg ${report[i].average.toFixed(2)} | Grade ${report[i].grade} | ${report[i].status}`
    );
  }

  // Summary
  let passCount = 0, failCount = 0;
  let topStudent = report[0], lowestStudent = report[0];

  for (let i = 0; i < report.length; i++) {
    if (report[i].status === "PASS") passCount++;
    else failCount++;

    if (report[i].average > topStudent.average) topStudent = report[i];
    if (report[i].average < lowestStudent.average) lowestStudent = report[i];
  }

  console.log("\nClass Summary:");
  console.log("Students: " + report.length);
  console.log("Pass: " + passCount);
  console.log("Fail: " + failCount);
  console.log(`Top Student: ${topStudent.name} (${topStudent.average.toFixed(2)})`);
  console.log(`Lowest Student: ${lowestStudent.name} (${lowestStudent.average.toFixed(2)})`);
}

// Run everything
const report = buildReport(students);
printReport(report);
