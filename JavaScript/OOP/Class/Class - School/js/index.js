const School = new School("");

school.addstudent(new Student('harry', ['wizardy','magic']));
school.addstudent(new Student('harry2', ['wizardy']));
school.addstudent(new Student('harry3', ['magic']));
school.addstudent(new Student('harry4', ['wizardy','magic']));

school.addTecher(new Techer('Burira', ['wizardy'], 2));
school.addTecher(new Techer('Burira2', ['wizardy'], 2));
school.addstudent(new Techer('pini', 'magic', 3));

school.Student.array.forEach(Student => {
    
    school.asdignStudent(Student);
    Student.crateTfuTfu()
});

console.log(school)