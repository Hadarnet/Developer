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

        
    
}