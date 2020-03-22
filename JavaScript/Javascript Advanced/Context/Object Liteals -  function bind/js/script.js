var wonderWomen = {

    name: "Diana Prince" 

}

var batman = {
    name: "Bruce Wayne"
}


var superHeroes = [wonderWomen, batman];

function printName() {
    console.log("My Name is " + this.name)
    
}


function printHeroes(heroes, printFunc) {
    for (var i = 0; i < heroes.length; i++) {
    var bindedPrintFunc = printFunc.bind(heroes[i]);
    bindedPrintFunc();
    }
   }
   
printHeroes(superHeroes, printName)