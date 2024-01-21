function verificar() {
    var mostrador = document.querySelector("p#mostrador");
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.querySelector("input#txtano");
    var res = document.querySelector("div#res");

    if (formAno.value > ano || formAno.value.length == 0) {
        mostrador.innerHTML = "Idade inválida";
        window.alert("Idade inválida");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(formAno.value);
        var genero = "";
        
        var img = document.createElement("img");
        img.setAttribute("src", "");
        if (fsex[0].checked) {
            genero = "Homem";
            if(idade >= 0 && idade < 10) {
                genero = "bebe"
                mostrador.innerHTML = `Você é um: ${genero} de ${idade} anos`;
                img.setAttribute("src", "bebemasc.jpg")
            }else if(idade > 10 && idade < 21) {
                genero = "Jovem"
                mostrador.innerHTML = `Você é um: ${genero} de ${idade} anos`;
                img.setAttribute("src", "jovemmasc.jpg")

            }else if(idade >= 21 && idade < 50) {
                mostrador.innerHTML = `Você é um: ${genero} de ${idade} anos`;
                img.setAttribute("src", "homem.jpg")
            }else if(idade > 50 && idade < 130) {
                genero = "Idoso"
                mostrador.innerHTML = `Você é um: ${genero} de ${idade} anos`;
                img.setAttribute("src", "idoso.jpg")
            }else{
                genero = "Esqueleto"
                mostrador.innerHTML = `Você é um: ${genero} de ${idade} anos`;
                img.setAttribute("src", "esqueleto.jpg") 
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if(idade >= 0 && idade < 10) {
                genero = "bebe"
                mostrador.innerHTML = `Você é um: ${genero} de ${idade} anos`;
                img.setAttribute("src", "bebefem.jpg")
            }else if(idade < 21) {
                genero = "Jovem"
                mostrador.innerHTML = `Você é uma: ${genero} de ${idade} anos`;
                img.setAttribute("src", "jovemfem.jpg")

            }else if(idade >= 21 && idade < 50) {
                genero = "Mulher"
                mostrador.innerHTML = `Você é uma: ${genero} de ${idade} anos`;
                img.setAttribute("src", "mulher.jpg")
            }else if(idade > 50 && idade < 130) {
                genero = "Idosa"
                mostrador.innerHTML = `Você é um: ${genero} de ${idade} anos`;
                img.setAttribute("src", "idosafem.jpg")
            }else{
                genero = "Esqueleto"
                mostrador.innerHTML = `Você é um: ${genero} de ${idade} anos`;
                img.setAttribute("src", "esqueleto.jpg") 
            }
        }

        res.style.textAlign = "center";
        
       
        res.style.textAlign = "center";
        var existingImg = res.querySelector("img");
        if (existingImg) {
            existingImg.setAttribute("src", img.getAttribute("src"));
        } else {
            res.appendChild(img);
        }
    }
}
