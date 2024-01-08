//Calculadoras de partidas rankeadas

function calcRanking(vitoria , derrota){
    let saldoVitoria = vitoria - derrota
    return saldoVitoria
}
let resultado = calcRanking(130,0)

if (resultado <= 10) {
    nivel = "ferro"
}else if (resultado > 10 && resultado <= 20){
    nivel = "Bronze"
}else if (resultado > 20 && resultado <= 50){
    nivel = "Prata"
}else if (resultado > 50 && resultado <= 80){
    nivel = "Ouro"
}else if (resultado > 80 && resultado <= 90){
    nivel = "Diamante"
}else if (resultado > 90 && resultado <= 100){
    nivel = "Lendário"
}else if(resultado > 100){
    nivel = "Imortal"
}
console.log("O Herói tem o saldo de "+ resultado , "vitorias "+"e está no nível de "+ nivel)