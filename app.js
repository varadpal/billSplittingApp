function joined() {
    let title = document.getElementById("result");
    let btn = document.getElementById("btn");

    let amount= document.getElementById("amnt").value;
    let persons= document.getElementById("pers").value;
    let inputArea = document.getElementById("input");
    
    let result= document.getElementById("result");

    setTimeout(() => {
        btn.style.backgroundColor = "grey"
    }, 25);
    setTimeout(() => {
        btn.style.backgroundColor = "black"
    }, 100);

    if (amount > 0 && persons > 0) {
        result.innerHTML= ("₹ "+ (amount/persons).toFixed(2) + " Per Person"); 
    }else{
        result.innerHTML= "Invalid Input";
        input.style.color= "red"; 
    }
}
