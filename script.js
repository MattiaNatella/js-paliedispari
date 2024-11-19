/*
Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


logica

1. Creo una funzione nominandola isPalindroma 
2. Dichiaro ALL'ESTERNO DELLA FUNZIONE una variabile const a cui assegno il metodo prompt per far inserire il valore della variabile all'utente
3.per verificare se è palindroma, creo un ciclo FOR che compara la prima lettera della parola con l'ultima, la seconda con la penultima, la terza con la terzultima ecc...,
4.La funzione isPalindroma mi dovrà restituire true se tutte le comparazioni danno esito true, altrimenti false
*/

let parolaUtente = prompt('Inserisci una parola')
let parolaReverse = parolaUtente.toLowerCase().split('').reverse().join('')
console.log(parolaReverse)

if (parolaUtente.toLowerCase() === parolaReverse) {
  console.log('La parola è palindroma')
} else {
  console.log('La parola non è palindroma')
}






// PRIMO TENTATIVO NON RIUSCITO

// function reverse(parola){
//   let parolaMinuscola = parola.toLowerCase();
//   return parolaMinuscola = parolaMinuscola.split("").reverse().join(" ");
// }

// function isPalindroma(word) {
//   if (parolaUtente === reverse(parolaUtente)){
//     return 'E\' palindroma'
//   } else {
//     return 'Non e\' palindroma'
//   }

// }

// const parolaUtente = prompt('Inserisci qui la tua parola e scopri se è palindroma')

// console.log(isPalindroma(reverse(parolaUtente)))

