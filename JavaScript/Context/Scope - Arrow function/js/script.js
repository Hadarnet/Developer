var value = 5;
const obj = {
    value:1,
    func: () => {
        return this.value;
    } 
}
let x = obj.func.bind(obj)
console.log(x());