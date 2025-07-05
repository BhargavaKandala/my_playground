let obj = {
    name: "BhaSha",
    age: 20,
    weight: 75,
    height: "6ft 1in",
    greet: function(){
        console.log("Hello World!!");
    }
}

// console.log(obj)
// obj.greet()

let Arr = [1,2,3,4,5];
let brr = new Array("BhaSha", 20, true);

brr.push("Bankai!!");
brr.pop();

brr.shift();
brr.unshift("BhaSha's Bankai!!");
brr.push(20)
brr.push(30)
brr.push(70)


// console.log(brr.slice(2,4));
// brr.splice(1, 2, "Senbonzakura");   //1 index nunchi 2 values remove chesi string ni add cheyyi..

// console.log(brr);

// let arr = [10, 20, 30];

// arr.map((number, index) =>{
//     console.log(number);
//     console.log(index);
// });c

// let ans = arr.map((number) => {
//     return number * number;
// })
// console.log(ans);


let arr = [10, 24, 38, 44, 57, 65, 71, 83];

let evenArray = arr.filter((number) => {
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
})
console.log(evenArray);


let instant = [1,5,26,7,23,45];
console.log(instant.sort((a,b) => a - b));

