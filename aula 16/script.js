let num = document.querySelector("input#fnum")
let tab = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false 
    }
} 

function inLista(n,l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement("option");
        item.text = `Valor ${num.value} Adicionado`;
        tab.appendChild(item);

        valores.push(n);
    } else {
        window.alert("Valor inválido ou já encontrado na lista");
    }
}

function finalizar() {
    
    if(valores == 0) {
    window.alert("Por favor adicione um número")
    }else {
       let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }

        }
       media = soma / tot
       res.innerHTML = ""
       res.innerHTML += `<P>Ao todo, temos ${tot} números cadastrados</P>`
       res.innerHTML += `<P> O Maior valor informado foi ${maior}</p>`
       res.innerHTML += `<P> O Menor valor informado foi ${menor}</p>`
       res.innerHTML += `<P> Somando todos os valroes, temos ${soma}</p>`
       res.innerHTML += `<P> Media dos valores: ${media}</p>`
    }
}