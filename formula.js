function celToFar(x){

    return x * 9/5  + 32;
    
} 

function farToCel(x){ 
    return (x - 32) * 5/9;
}

function displayToFar(){
    var input = Number(document.getElementById("n1").value); 
    var farenheit = celToFar(input);  

    console.log(farenheit);
    
    document.getElementById("farenheit").value = farenheit;

}

function displayToCel(){

    var input2 = Number(document.getElementById("n2").value);
    var celcius = farToCel(input2);

    document.getElementById("celcius").value = celcius.toFixed(5);
}

function metersToFeet(x){
    return x*3.28084;
}

function displayMTF(){
    var input3 = Number(document.getElementById("meter").value);
    var feet = metersToFeet(input3);

    document.getElementById("feet").value = feet.toFixed(4);
}

function feetToMeters(x){
    return x/3.28084;
}

function displayFTM(){

    var input4 =Number(document.getElementById("foot").value);
    var meters = feetToMeters(input4);

    document.getElementById("meters").value = meters.toFixed(4);
}

document.getElementById("conv").addEventListener("click", displayToFar)

document.getElementById("conv2").addEventListener("click", displayToCel)
document.getElementById("conv3").addEventListener("click", displayMTF)
document.getElementById("conv4").addEventListener("click", displayFTM)

document.getElementById("n1")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("conv").click();
    }
});

document.getElementById("n2")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("conv2").click();
    }
});

document.getElementById("meter")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("conv3").click();
    }
});

document.getElementById("meter")
.addEventListener("keyup", function(event) {
event.preventDefault();
if (event.keyCode === 13) {
    document.getElementById("conv3").click();
}
});