Palindroma + Pari e Dispari

===

nome repo: js-paliedispari

Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


logica

1. Creo una funzione nominandola isPalindroma 
2. Dichiaro ALL'ESTERNO DELLA FUNZIONE una variabile const a cui assegno il metodo prompt per far inserire il valore della variabile all'utente
3.per verificare se è palindroma, creo un ciclo FOR che compara la prima lettera della parola con l'ultima, la seconda con la penultima, la terza con la terzultima ecc...,
4.La funzione isPalindroma mi dovrà restituire true se tutte le comparazioni danno esito true, altrimenti false


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