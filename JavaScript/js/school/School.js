class School {
    constructor() {
        console.log('created school');
        this.Programmers = [];
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }
    addProgrammer(Programmer) {
        this.Programmers.push(Programmer);
    }

    isProgramingIn(program) {
        this.students.map(student => {
            console.log(student)
        })

       
    }
}
const school1 = new School();
school1.addStudent(student1)
const students = []
const student1 = new Student('Netanel', ['python', 'javascript']));
const student2 = new Student('Matan', ['javascript']));
const student3 = new Student('Zvika', ['Css', 'Html']));

const Programmer1 = new Programmer('windows', ['python'], 2));
const Programmer2 = new Programmer('linux', ['javascript'], 2));
const Programmer3 = new Programmer('android', ['Html'], 3));
