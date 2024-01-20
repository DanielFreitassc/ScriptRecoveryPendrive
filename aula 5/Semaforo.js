var velocidade = 20;
var limiteDaVia = 60;
console.log(`A sua velocidade atua é de ${velocidade}Km/h `);

if(velocidade < limiteDaVia / 2){
console.log(`Sua velocidade: ${velocidade}Km/h é menor que o limite: ${limiteDaVia}Km/h da via você foi multado`);
}else if(velocidade > limiteDaVia){
    console.log(`Sua velocida ${velocidade}Km/h  é maior que o limite ${limiteDaVia}Km/h  da via você foi multado`)
}
