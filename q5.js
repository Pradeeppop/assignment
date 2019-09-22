var arr1 = [1,3,5,6,7,];
var arr2 = [2,5,7,8,9];
var iterator = arr2[Symbol.iterator]();
arr2.map (v=>{arr1=[...arr1,iterator.next().value]
})
console.log(arr1);//output- [1,3,5,6,7,2,5,7,8,9]