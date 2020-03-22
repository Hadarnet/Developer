const assert = require("chai").assert;
function transpose(mat) { 
    for (var i = 0; i < mat.length; i++) { 
        for (var j = 0; j < i; j++) { 
            const tmp = mat[i][j]; 
            mat[i][j] = mat[j][i]; 
            mat[j][i] = tmp; 
        } 
    } 
    return mat;
}


describe("Checking Matrix transpose" , () =>{
        it(" Should return a new matrix ", () =>{
        assert.deepEqual(transpose([[1,2,3],[4,5,6],[7,8,9]]),[[1,4,7],[2,5,8],[3,6,9]]);
        })
})