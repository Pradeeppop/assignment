let str= 'hello';
let str2="hello";
let str1=`hello`;


console.log(str1);
let one=1;
let two=2;

let sum=`adding ${one} and ${two} give me ${one+two}`;
console.log(sum);

let tagged=function(strArray,...vals){
console.log(strArray);
console.log(vals);
};
tagged `adding ${one} and ${two} give me ${one+two}`




