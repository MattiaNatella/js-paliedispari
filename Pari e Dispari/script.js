/*

Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Logica

1.Creo due variabili const una per l'utente dove portrà scegliere un numero da 1 a 5, ed una per il computer dove il valore verrà assegnato dal sistema
2.creo una funzione per generare un numero random e la richiamo nella variabile del computer
3. sommo i due numeri
4. creo una funzione che verifica il risultato restituendo chi ha vinto in base al modulo della somma / 2.

*/


const numeroUtente = prompt('Inserisci un numero da 1 a 5')
const numeroPC = getRandom();
console.log('il numero scelto dal pc è ',numeroPC)

function getRandom() {
  return Math.ceil(Math.random()*6);
}