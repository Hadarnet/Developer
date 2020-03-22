
const school = new School();

school.addStudent(new Student('Netanel', ['python', 'javascript']));
school.addStudent(new Student('Matan', ['javascript']));
school.addStudent(new Student('Zvika', ['Css', 'Html']));

school.addProgrammer(new Programmer('windows', ['python'], 2));
school.addProgrammer(new Programmer('linux', ['javascript'], 2));
school.addProgrammer(new Programmer('android', ['Html'], 3));



school.students.forEach(student => {

    school.assignStudent(student);
})

console.log(school);
