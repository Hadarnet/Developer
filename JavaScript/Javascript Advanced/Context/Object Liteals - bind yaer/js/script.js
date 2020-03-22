birth_year = 1990;
var wolverine = {
    birth_year: 1988,
    getX: function () {
        console.log(this.birth_year);
    }
};


var GetiOut = wolverine.getX;
GetiOut(); 

var GetBOut = GetiOut.bind(wolverine);
GetBOut();
