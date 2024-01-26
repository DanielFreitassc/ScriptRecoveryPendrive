function gerartabuada() {
    let num = document.querySelector("input#txtn")
    let  tab = document.querySelector("select#seltab")

    if(num.value.length == 0) {
        window.alert("[400 Bad Request] digite um número valido");
    }else {
        let n = Number(num.value)
        tab.innerHTML = ""
        /*
        let c = 1
        while(c <= 10) {
            let item = document.createElement("option")
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }

        */
        for(let i = 1; i <=10; i++) {
            let item = document.createElement("option")
            item.text = `${n} X ${i} = ${n*i}`
            tab.appendChild(item)
        }
    }
   
}

