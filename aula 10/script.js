function contar(){
    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("passo");
    var res = document.getElementById("conta");
    var cm = Number(inicio.value)
    var cn = Number(fim.value)
    var ps = Number(passo.value)
    if(cm > cn && ps == 0){
        for(var c = cm; c >= cn ; c--){
           var conta = document.createElement("div")
           conta.textContent = c;
           res.appendChild(conta);
        }    
    }else if(cn> cm && ps == 0){
    for(var j = cm; j <= cn; j++){
        var conta = document.createElement("div")
        conta.textContent = j;
        res.appendChild(conta);
    }
    }else if(cm > cn){
        for(var c = cm; c >= cn ; c -= ps){
           var conta = document.createElement("div")
           conta.textContent = c;
           res.appendChild(conta);
        }    
    }else if(cn> cm){
    for(var j = cm; j <= cn; j += ps ){
        var conta = document.createElement("div")
        conta.textContent = j;
        res.appendChild(conta);
    }
    }else{
        
        res.innerHTML = "Contagem inválida"
        res.style.color = "red"
    }
    
}