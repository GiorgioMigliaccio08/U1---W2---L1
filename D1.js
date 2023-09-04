/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
console.log(
  "I principali datatype in JavaScript sono 5: 1)NUMERO: in esso possaimo inserire un qualsiasi numero 2)STRINGA: in essa possiamo scrivere una frase/caratteri tra due apici 3)BOOLEAN: esso restituisce un valore che può essere Vero/Falso  4)NULL: viene utilizzato per fare riferimento all'assenza di un valore nell'oggetto, può essere anche restituito da una fuzione/variabile 5) UNDEFINED : viene utilizzato per fare riferimento ad una variabile dichiarata senza che essa sia stata inizializzata (ovvero non ha alcun valore assegnato"
);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Giorgio";

console.log("Il mio nome è:", name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let numero1 = 12;
let numero2 = 20;
let numero3 = numero1 + numero2;

console.log("La somma dei numeri 12 + 20 =", numero3);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x;
x = 12;
console.log("Ho assegnato ad x il valore=", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

const surname = "Migliaccio";
name = surname;
console.log(
  "Adesso il mio nome è diventato il mio cogmome tramite una variabile const:",
  name
);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let numero5 = x - 4;
console.log("Esegui una sottrazione tra i numeri x-4=", numero5);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log("john e diverso da John:", name1 !== name2);
