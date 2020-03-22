var user = {

name : "Netanel",
Printname: function () {
    console.log("my name is " + this.name);
    
    
},
printNameAfter: function(){
    setTimeout (function(){ user.Printname();}, 1000);
        
    }
    
};



user.Printname()
let fun = user.printNameAfter;
fun()