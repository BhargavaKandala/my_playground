// let promise1= new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise Successful")
//     }else{
//         reject("Error: ");
//     }
// })
// promise1.then((message) =>{
//     console.log("First message: " + message);
//     return "Promise fulfilled second message";
// }).then((message)=>{
//     console.log("Second message: " + message);
//     return "Promise fulfilled third message";
// }).then((message) =>{
//     console.log("Third message: " + message); 
// }).finally((message) =>{
//     console.log("I will be there no matter what!!!");
// })


//Task --- create multiple promises and console them only if all are returning instead of giving error.
//after a certain amount of time has been over..using setTimeout function..

let promise1 = new Promise((response, reject) =>{
    setTimeout(response, 0, "First Message")    
});
let promise2 = new Promise((response, reject) =>{
    setTimeout(response, 0, "Second Message")    
});
let promise3 = new Promise((response, reject) =>{
    setTimeout(response, 0, "Third Message")    
});

Promise.all([promise1, promise2, promise3]).then((values)=> {
    console.log(values);
}).catch((error) =>{
    console.log("An unexpected Error has occured: " + error);
})