//OBJECT CLONING .......

//1. Spread operator:
src = {
    name: "Bhargava",
    age: 20,
    health: 100,
    wt: 76,
    ht: `6' 1"`
};

let dest1 = {...src};

src.age = 21; 

console.log("src: ", src);
console.log("dest: ",dest1);


//2. Assigning

let dest2 = Object.assign({}, src); //2nd method

src.age = 23;
console.log("dest2: ",dest2);

//3. Iteration:

let dest3 ={}

for(let key in src){
    let newKey = key;
    let newValue = src[key];

    dest3[newKey] = newValue;
}

src.age = 25;
console.log("dest 3: ", dest3);

































