var a = {
    name: "pop",
    work: "backend"
};

var b = {
    name: "pop",
    work: "backend"
};

console.log(a === b);//false
//The properties of a and b is identical,so the objects aren't considered equal.
 
console.log(a==b);//false 
//The reason for this is that  JavaScript actually has two different approaches for testing equality. 
//Primitives like strings and numbers are compared by their value,
// while objects like arrays, dates, and plain objects are compared by their reference.
var q=a;
console.log(q===a);//true;
//the variables "a" and "b" refer to two objects with identical properties,
// but they are each distinct instances.
// and the  "a" and "q" both refer to the same instance.

