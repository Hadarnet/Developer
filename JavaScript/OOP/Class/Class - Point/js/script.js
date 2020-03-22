
    class Point {
      constructor(x, y) {
      this.x = x;
      this.y = y;
      }
    
}
    
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.add = function(a, b) {
  const x = a.x + b.x;
  const y = a.y + b.y;
  return new Point(x, y)
}

a = new Point(1,2);
b = new Point(2,3);
c = Point.add(a, b)


console.log('a: ', a)
console.log('b: ', b)
console.log('c: ', c)
