//Reflow: process of calculating the position/ dimensions of element --- Computationally expensive

//Repaint: Process of displaying element pixel by pixel.

//Code 1
let t1 = performance.now();

for(let i = 0; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para: " + i;
    document.body.appendChild(para);
}

let t2 = performance.now();

console.log(`time taken: ` + (t2-t1));

//Code 2

let t3 = performance.now();
let mydiv = document.createElement('div');

for(let i = 0; i <= 100; i++){
    let mypara = document.createElement('p');
    mypara.textContent = `This is the para number: ` + i;
    mydiv.appendChild(mypara);
}
document.body.appendChild(mydiv);

let t4 = performance.now();

console.log("Time taken for second performance wa: " + (t4-t3));


//Code 3;
let fragment = document.createDocumentFragment();

for(let i = 0; i <= 100; i++){
    let mypara = document.createElement('p');
    mypara.textContent = "Para: " + i;
    fragment.appendChild(mypara);
}

document.body.appendChild(fragment);