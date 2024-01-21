function gerar(){
    var num = document.getElementById("num")
    var res = document.getElementById("conta")
    var numero = Number(num.value)
    
    for(i = 1; i <= 10; i++){
        var result = numero * i
        var conta = document.createElement("div")
        conta.textContent =  result; 
        res.appendChild(conta);  
    }
}