var mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let p=require("readline");
var abd=p.createInterface(process.stdin,process.stdout);
abd.question("enter email:",function(name){
    if(mail.test(name)){
        console.log("A valid email address");
        
    }
    else{
        console.log("Invalid email address");
        
    }
    process.exit();
});