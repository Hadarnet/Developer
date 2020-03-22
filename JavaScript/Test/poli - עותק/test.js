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
	

var expect = require('chai').assert;
var atranspose = require('./arrays');

describe('arrays Test Block',function(){
	it('for arrays',function(){
		var result = atranspose.transpose("1,2,3,");
		assert(result).to.not.be.undefined;
		assert(result).to.equal(true);
	});
});