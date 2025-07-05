let promise1= new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Promise Successful")
    }else{
        reject("Error: ");
    }
})
