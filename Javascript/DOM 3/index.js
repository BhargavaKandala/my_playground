let mypara = document.getElementById('spara');
mypara.setAttribute('class' , 'secondPara')
console.log(mypara);


mypara.setAttribute('style', "background-color: black; color: white; padding: 0.8rem; font-weight:bold;");

let fpara = document.getElementById('fpara')
console.log(fpara);
fpara.className = "gohan, bulbul";

//talked about getElementbyiD, className etc.--> these change the previously written styles.
//setAttribute() sets the ('attribute' , 'its name');
//classLists help to add or change the class names 
//classList.add('') and classList.remove('') helps to add and remove the class names for the respective div's.
//classList.toggle() helps to add if its not present and remove if it is present.
//classList.contains('') gives the bool value if the class is present or not.
