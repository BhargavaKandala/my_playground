
function Myevent(){
    let mypara = document.getElementById("fpara");
    mypara.textContent = "I am Batman";
}

let mypara = document.getElementById("fpara");
mypara.addEventListener('click', Myevent);

function callMe() {
        window.alert("You have clicked the para: " + i);
    }

let paras=document.querySelectorAll('p');
for(let i = 0; i < paras.length; i++){
    let para = paras[i];
    para.addEventListener('click' , callMe);
}