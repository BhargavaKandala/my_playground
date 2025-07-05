// async function nadi(){
    
//     setTimeout(()=>{
//         console.log("This is a Labrador bolthe!!");
//     }, 3000);
    
// }

// let val = nadi;
// nadi();

// async function getData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//     //parse json - async
//     let data = await response.json();
//     console.log(data);
// }
// getData();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
        method: "POST",
        body: JSON.stringify({username: "Bhargava Sharma"}),
        headers: myHeaders,
}

async function getdata(){
    const url = "https://dummyjson.com/posts";
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: 'Bhargava Sharma --> I am in love with someone.',
            userId: 5,
            
            })
        });
    let data = await response.json();
    console.log("get Data response: ", data);
}
async function postData() {
    const response = await fetch(url, options);
    let data = await response.json();
    console.log("Post Data response: ",data);
}


async function processData(){
    await postData();
    await getdata();
}
processData();


