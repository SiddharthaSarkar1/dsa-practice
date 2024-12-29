const studentDatabase = ["Jordai", "Sankar", "Khokon", "Palas", "Robi"];

const findStudent = (studentDatabase, studentName) => {
  for (i = 0; i < studentDatabase.length; i++) {
    if (studentDatabase[i] === studentName) {
      console.log(`Found: ${studentName}`);
    }
  }
};

findStudent(studentDatabase, "Sankar");
findStudent(studentDatabase, "Prodip");
