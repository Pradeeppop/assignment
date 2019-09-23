   1. Template literals is a way to deal with strings .
   2. Template literals uses `backticks` to write a string within .
   3. Better to use with templates has multi line , concatenation of variables and expressions .
   
   expression of the tmplate literal strings:

   let isWorld = true ;
    let welcome = ` Hello ${ isWorld ? "World" : "me" } ! ` ;
      console.log(welcome); 

here below the string declaration with single quotes,double quotes and Backtick:
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




