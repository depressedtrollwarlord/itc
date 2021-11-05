function factorial(x){
    let i = 1;
    let out = 1;
    while (i <= x){
        out *= i;
        i++;
    }
    return out;
}
function displayF(){
    var input = Number(document.getElementById("n1").value);
    var output = factorial(input);
    document.getElementById("result").value = output;
}
document.getElementById("btn1").addEventListener("click", displayF);

function sum(x){
    let j=0;
    let z=0;
    do{
        z += j;
        j++
    }while(j<=x);
    return z;
   
    
}
function displayS(){
    var input = Number(document.getElementById("n2").value);
    var output = sum(input);
    document.getElementById("result2").value = output;
}
document.getElementById("btn2").addEventListener("click", displayS);

function avg(x){
    let sum=0
    for(i=1; i<=x; i++){
    sum = sum + i;
    }
    return ave = sum / x;
}
function displayAvg(){
    var input = Number(document.getElementById("n3").value);
    var output = avg(input);
    document.getElementById("result3").value = output;
}    
document.getElementById("btn3").addEventListener("click", displayAvg);