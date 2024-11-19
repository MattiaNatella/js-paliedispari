/*
Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


logica

1. Creo una funzione nominandola isPalindroma 
2. creo variabile const come prompt per l'utente
3. Nella funzione dovrò dichiarare un'altra variabile a cui assegnerò il valore del prompt, trasformandolo prima in un array per poter utilizzare il metodo reverse e renderlo un array speculare, più dovrò ritrasformare il risultato in una stringa e rendere tutti i caratteri minuscoli
4.sempre nella funzione utilizzerò un IF per comparare il valore del prompt con la variabile creata nella funzione, se sarà uguale il return sarà positivo, altrimenti negativo
*/

const parolaUtente = prompt('Inserisci una parola')
console.log(isPalindroma(parolaUtente));

function isPalindroma(parola) {
  let parolaReverse = parola.toLowerCase().split('').reverse().join('')
  if (parola.toLowerCase() === parolaReverse) {
    return `La parola ${parola} è palindroma`
  } else {
    return `La parola ${parola} non è palindroma`
  }
}
