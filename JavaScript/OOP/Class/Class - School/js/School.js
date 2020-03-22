class School {
    constructor() {
        console.log('NewSchool');
        this.teachers = [];
        this.students = [];

    }
    addStudent(student) {
        this.students.push(student)
    }

    addTeachers(teachers) {
        this.teachers.push(teachers)
    }

    assignStudent(student) {

        for (const subject of student.subjects) {
            for (const teacher of this.teachers) {
                if (teacher.canTeach(subject)) {
                    teacher.students.push(student);
                    break;
                }
            }
        }
    }
}