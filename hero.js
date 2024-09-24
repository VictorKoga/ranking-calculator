/// Dev: Victor Koga
// Date: 24/09/2024

// Função para calcular a quantidade de vitórias e derrotas
function quantityVictoryDefeat(win, lose){
  let balanceRanked = win - lose;
  let level
  if (win < 10) {
    level = "Ferro"    
  } else if (win <= 20){
    level = "Bronze"
  } else if (win <= 50){
    level = "Prata"
  } else if (win <= 80){
    level = "Ouro"
  } else if (win <= 90){
    level = "Diamante"
  } else if (win <= 100){
    level = "Lendário"
  } else {
    level = "Imortal"
  }
  return {
    balanceRanked: balanceRanked,
    level: level
  }
}

function getBalance(){
  let balance = quantityVictoryDefeat(70, 20)
    console.log(`O Herói tem um saldo de ${balance.balanceRanked} e está no nível de ${balance.level}`);
}

getBalance()



