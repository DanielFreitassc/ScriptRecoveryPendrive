function contar() {
    let ini = document.querySelector("input#txti")
    let fim = document.querySelector("input#txtf")
    let passo = document.querySelector("input#txtp")
    let res = document.querySelector("div#res")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] faltam dados!")
    }else {
      if(passo.value <= 0) {
        window.alert("[ERRO] Impossivel contar de 0 em 0")
      }
      else if(ini.value < fim.value) {
        // Contagem crescente
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c += p) {
            res.innerHTML += `👉${c}`
            
        }
        res.innerHTML += `🚩`
      }else {
        //contagem regressiva
        res.innerHTML = "Contando: <br>"
        
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c >= f; c -= p) {
            res.innerHTML += `👉${c}`
           
        }
        res.innerHTML += `🚩`
      }
    }
    
}