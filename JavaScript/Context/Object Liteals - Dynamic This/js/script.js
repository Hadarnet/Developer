var obj = {

    name: "Bob",
};
var name = "Global scope";

var foo = function (){
    console.log(this.name);
    
}
obj.foo = foo;
obj.foo();
//bobe

foo();
//Global scope