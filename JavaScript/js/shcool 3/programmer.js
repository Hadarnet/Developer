class Programmer extends Student {
    constructor(name, courses, os, languages, vcs) {
        super(name, courses);
        this.os = os;
        this.languages = languages;
        this.vcs = vcs;
    }


    isProgramingIn(language) {
        return this.languages.includes(language)
        // if (this.languages.includes(language)) {
        //     return true;
        // }
}
}
