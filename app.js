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
        inputArea.style.color='#2B2730';
        inputArea.style.fontWeight='400';

        result.style.color='black';
    }else{
        result.innerHTML= "Invalid Input";
        inputArea.style.color='#ff4939';
        inputArea.style.fontWeight='600';
        
        result.style.color='#ff4939';
        
        btn.classList.add("apply-shake");
        setTimeout(() => {
            btn.style.backgroundColor="#ff4939";
        },100)
        
    }
}
