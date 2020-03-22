
function getDogsOfType(dogs, type){
    var dogs = [dog1, dog2, dog3, dog4, dog5];

    let name = [];
    for(const dog of dogs){
        if (dog.type == type) {
            name.push(dog.name)
            
        }
    }
return name;

}

document.body.appendChild(document.createTextNode(getDogsOfType()));


var dog1 = new Dog("blacky", "Pudel", 3, true);
var dog2 = new Dog("koko", "Boxer", 1, true);
var dog3 = new Dog("silver", "Labrador", 5, false);
var dog4 = new Dog("nana", "Labrador", 2, false);
var dog5 = new Dog("biko", "Labrador", 6, true);





//    function test_equal(actual, expected, msg) {
//     if (Array.isArray(expected)) {
//     for (var i = 0; i < expected.length; i++){
//     test_equal(actual[i], expected[i], "item in index " + i);
//     }
//     } else {
//     if (actual !== expected) {
//     console.log(`Error testing ${msg || ''}. expected: ${expected}, got ${actual}`)
//     }
//     }
//    }
  
//    test_equal(getDogsOfType([dog1, dog2, dog3, dog4, dog5], "Labrador"), ["silver", "nana", "biko"]);
//    test_equal(getDogsOfType([dog1, dog2, dog4], "Labrador"), ["nana"]);
//    test_equal(getDogsOfType([dog1, dog2], "Labrador"), []);