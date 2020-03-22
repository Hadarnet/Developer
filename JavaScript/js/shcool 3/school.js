class School {
    constructor() {
        console.log('created school');

        this.programmers = [];
        this.students = [];
    }

    addStudent(Student) {
        this.students.push(Student);
    }
    addProgrammer(Programmer) {
        this.programmers.push(Programmer);
    }

     checkLanguage(programmers, langauge){
         console.log(programmers);
         
         
         
         for (let i = 0; i < programmers.length; i++) {
             for (let j = 0; j < programmers[i].languages.length; j++) {
               return programmers[i].languages[j] === langauge;
                 
             }
            
             
             
             
             
         }
         
        // for (const  of listOfPersons) {
        //     if (person instanceof Programmer && person.isProgramingIn(language)) {
        //         return console.log(person.name);
        //     }
        }
    }


    

    
