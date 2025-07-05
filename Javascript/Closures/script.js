let name=`Manishanth`;
function outer(){
    let name ="Bhargava";
    function inner(){
        let name = `Sharma`
        console.log(name);
    }
    inner();
}
outer();