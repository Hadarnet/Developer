function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

console.log(transpose([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));
