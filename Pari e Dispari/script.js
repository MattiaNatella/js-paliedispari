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

const sceltaUtente = prompt('Inserisci pari o dispari')
const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
const numeroPc = getRandom();
const risultato = numeroUtente + numeroPc


console.log(`
  l'Utente ha scelto ${sceltaUtente} e giocato il numero ${numeroUtente}
  l'Avversario ha giocato il numero ${numeroPc}
  il risultato è ${risultato}, per cui`, winner(risultato,sceltaUtente))

function winner(somma,pariDispari) {
  if ((!(somma % 2) && pariDispari === 'pari') || (somma % 2 && pariDispari === 'dispari')){
    return 'HAI VINTO'
  } else {
    return 'HAI PERSO'
  }
}

function getRandom() {
  return Math.ceil(Math.random()*5);
}