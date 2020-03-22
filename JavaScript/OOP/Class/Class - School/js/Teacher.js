class Teachers extends SchoolPerson {
    constructor (name, subjects, maxStudends) {
        super(name,this.subjects);
        this.maxStudends = maxStudends;
        this.studends = [];
    }

    canTeach(subject){
        return subject === this.subject[0] && 
        this.studends.length < this.maxStudends;
    }
}