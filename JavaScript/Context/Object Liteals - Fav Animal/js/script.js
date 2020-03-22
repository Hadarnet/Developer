favourite_animal = "dog";
var spiderMan = {
    favourite_animal: "spider",
    getX: function () {
        console.log(this.favourite_animal);
        return this.favourite_animal;

    }

};


var GetBin = spiderMan.getX;
GetBin(); 

var GetBOut = GetBin.bind(spiderMan);
GetBOut();

var fly = GetBin.bind({favourite_animal: "cat"});
fly();