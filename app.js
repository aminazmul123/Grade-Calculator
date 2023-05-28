let name = prompt("Enter your Name");
let bio = parseInt(prompt("Enter Your Biology marks"));
let chem = parseInt(prompt("Enter Your Chemistry marks"));
let phy = parseInt(prompt("Enter Your Physics marks"));
let math = parseInt(prompt("Enter Your Math marks"));

let result = (bio + chem + phy + math) / 4;

if(result > 100){
    document.write("Your Marks are Invalid!");
}
else if(result >= 80 && result <= 100){
    document.write(`${name}, your Grade is A+ and your average is ${result}`);
}
else if(result >= 70 && result <= 79){
    document.write(`${name}, your Grade is A and your average is ${result}`);
}
else if(result >= 60 && result <= 69){
    document.write(`${name}, your Grade is A- and your average is ${result}`);
}
else if(result >= 50 && result <= 59){
    document.write(`${name}, your Grade is B and your average is ${result}`);
}
else if(result >= 40 && result <= 49){
    document.write(`${name}, your Grade is C and your average is ${result}`);
} else{
    document.write(`${name}, your Grade is F and your average is ${result}`);
}
