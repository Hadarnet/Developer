class Shape {
    constructor (type, color) {
    this.type = type;
    this.color = color;
    }
   }

   let circle = new Shape ("circle", "black" )
   circle.radius = 3;
   circle.calcArea = function(){

    const circleArea = Math.PI * (circle.radius **2);
    return [circleArea];

   };
   let square = new square ("square","blue")
   square.edgeLength = 5;
   square.calcArea = function(){

    const squaerArea = square.edgeLength * square.edgeLength;
    return [squaerArea];

   };
