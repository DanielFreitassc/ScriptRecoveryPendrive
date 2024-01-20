var hora = new Date()
var dia = hora.getDate()
console.log(dia)
var idade = 20;

if(idade <16 && idade > 0){
    console.log("Não vota")
    idade = 1
    
}else if(idade >= 18){
    console.log("Voto obrigatorio")
    idade = 2
}else if(idade >= 67){
    console.log("Voto opcional")
    idade = 3
}else{
    console.log("Idade invalida")
    idade = 4
}

switch (idade) {
    case 1:
        console.log("Não vota")
        break;
    case 2:
        console.log("Voto obrigatorio")
        break;
    case 3:
        console.log("Voto opcional")
        break;
    case 4:
        console.log("Idade invalida")
        break;
    default:
        break;
}
if(dia >= 15){
    console.log("Metade do Mês")
}else if(dia >= 0 || dia < 15){
    console.log("Começo do Mês")
}