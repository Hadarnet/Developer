
const school = new School();

school.addStudent(new Student('Netanel', ['python', 'javascript']));
school.addStudent(new Student('Matan', ['javascript']));
school.addStudent(new Student('Zvika', ['Css', 'c']));

school.addProgrammer(new Programmer("pini", ["javaScript"], "os", ['python', 'c'], 'css'));
school.addProgrammer(new Programmer("yakov", ["java"], "os", ["javascript", 'python', 'c'], 'css'));
school.addProgrammer(new Programmer("yakov", ["java"], "os", ["javascript", 'python', 'c'], 'css'));


    school.checkLanguage(school.programmers,"javascript");


