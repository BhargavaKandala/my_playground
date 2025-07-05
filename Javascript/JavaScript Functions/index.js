function funBolthey(){
    for(let i = 0; i <= 1; i++){
        console.log(i);
    }
}

funBolthey();

function fun2(num){
    console.log(`Number: `,num);
}
fun2(22121);

//
function fun3(num1, num2){
    let avg = (num1 + num2) /2;
    console.log("Average: ", avg);
}

fun3(10,20);

//
function fun4(a, b, c){
    let sum = a + b + c;
    return sum;
}
let ans = fun4(10, 20, 30);
console.log("Sum : ",ans);


// //////// //////// /
let multiply = function(a , b){
    return a * b;
}

let answer = multiply(4,5);
console.log("Multiplication: ", answer);


let getExp = (a ,b) =>{
    let ans = a ** b;
    return ans;
}

console.log(getExp(2, 10));




function surya(){
    console.log("Hello Surya");
}
surya();

function surya1(age){
    console.log("Age of Surya is: ", age);
}
surya1(34);

let multiply2 = (a, b)=>{
    return a * b;
}
console.log(multiply2(4,5));




let suryaBhai = function naadi(a, b){
    return a * b;
}
console.log(suryaBhai(4, 5)); 


let suryaaa = (a , b, c) => {
    return a * b * c;
}
console.log(suryaaa(3, 4,5));