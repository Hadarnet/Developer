class Programmer extends Student {
    constructor(name, courses, os, languages, vcs) {
        super(name, courses);
        this.os = os;
        this.languages = languages;
        this.vcs = vcs;
    }

    isProgramingIn(language) {
        if (this.languages.includes(language)) {
            return true;
        }
}
}
