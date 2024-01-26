let nmList = ["daniel", "freitas"]

let num = [1,2,3,4,5,6,7,8,9,10]

console.log(nmList[0] +" "+ nmList[1])

for(let i = 0; i <num.length; i++) {
    console.log(`Espaço na memoria:${i} valor:${num[i]}`)
}

num[11] = 11


console.log(`Primeiro elemento da lista : ${num[0]}, Lista de números:${num} , Tamanho: ${num.length} , Vetor ordenado  ${num.sort()}`)

for(let i in num) {
    console.log(num[i])
}

let pos = num.indexOf(10)
console.log(` O valor 10 está na posição de número :${pos}`)