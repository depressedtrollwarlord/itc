function calcTax(x){
    
    if(x <= 250000){
        return 0; 
    }
    if(x >= 250000 && x <= 400000 ){
        return (x - 250000)*.2;
    }
        
    if(x >= 400000 && x <= 800000){
        return(x-400000)*.25 + 30000;
    }
    if(x >= 800000 && x <= 2000000){
        return(x-800000)*.30 + 130000;
    }
    if(x >= 2000000 && x <= 8000000){
        return(x-2000000)*.32 + 490000;
    }
    if(x >= 8000000){
        return(x-8000000)*.35 + 2410000;
    }
}

function displayIncTax(){
var input = Number(document.getElementById("salary").value);
var incTax = calcTax(input);

document.getElementById("result").value = incTax.toFixed(2);
}

document.getElementById("calc").addEventListener("click",displayIncTax)

//pang Enter rani ayaw i mind
document.getElementById("salary")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("calc").click();
    }
});