var numero = 2;
if (numero > 10){
    console.log("É maior");
}else {
    console.log("Não é maior");
}

switch (numero) {
    case 1:
        console.log("Caso 1");
        break;
    case 2: 
        console.log("caso 2");
        break;
    default:
        console.log("Número fora do scopo")
        break;
}