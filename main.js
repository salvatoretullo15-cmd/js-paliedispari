/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
1-Scriviamo sempre in italiano i passaggi che vogliamo fare,
2-Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.,

Domande da  farsi quando si crea una funzione:
1-Come dovrebbe chiamarsi?,
2-Ho bisogno di parametri?,
3-Devo restituire un valore?,
4-Se sì, di che tipo?,
*/


/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//L’utente sceglie pari o dispari

const user_choice= prompt("even or odd")

//L’utente inserisce un numero da 1 a 5

const user_Number= Number(prompt("choose a number between 1 and 5"))
console.log(user_choice,user_Number);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)

function getRndInteger(min , max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let pc_number = getRndInteger(1, 5);

console.log(pc_number);

//Sommiamo i due numeri

let som_Number = user_Number + pc_number
console.log(som_Number);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function getEvenOrOdd() {
    const is_Even=false;
    if ( som_Number %2==0 ) {
        is_Even="true";
        console.log("Even");
    } 
    else  {
        console.log("Odd");
    } 
    return is_Even
}

//Dichiariamo chi ha vinto
let message
if (user_choice == "even" && getEvenOrOdd() == true ) {
    message="player win"
} else if(user_choice == "odd" && getEvenOrOdd() == false){
    message="player win"
} else {
    message="you lose"
}
    
console.log(message);

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//Chiedere all’utente di inserire una parola

//const user_Word=prompt("inserisci una parola")
const word=""

//Creare una variabile per salvare la parola dell'utente

function splitted_Word(word_to_split) {
    
    //prendi il character e push nello splarrey
    const spl_array = []
    //creare un loop per ogni interazione 
    //[split]la parola in una sequenza di caratteri in un array
    for (let i = 0; i < word_to_split.length; i++){
        const char = word_to_split [i]
        console.log(char);
        spl_array.push(char)
    }

    //console.log(spl_array);
    //restituire splitted_word
    return spl_array
}

const splitt_Array = splitted_Word(word)  //cosi ci restituisce la nostra parola in un array separata parola per parola
console.log(splitt_Array);               

//[reverse]l'array del character
//loop over the array from the end
//prendi il character e immagazinalo nel reversed array
function array_reversed(splitt_Array){  //qui e diventato il parametro 
                                        //della nostra seconda funzione
    
    const reversal_array=[]
    for (let i = splitt_Array.length - 1; i >=0; i--) {
        const char = splitt_Array[i];
        reversal_array.push(char)
    }
    
    //console.log(reversal_array);
    //restituire reversal_array
    return reversal_array

}

const reversal_array = array_reversed(splitt_Array)
console.log(reversal_array);


//[join]the array in una stringa
//loop over the reversal_array and
//immagazina character indietro in plain string con strings concatenation
function join_String(reversal_array) {


    let joinString=""

    for (let i = 0; i < reversal_array.length; i++) {
        const char = reversal_array[i];
        joinString += char
    }

    //console.log(joinString);
    //restituire joinString
    return joinString
    
}

const joinString= join_String(reversal_array)
console.log(joinString);

//controllare se la parola reversata e uguale alla parola originale 
//controllare se e true
//its a palindrome
//otherwise
//non at a palindrome

function getPalindrom(word) {
    //qui dividiamo la nostra parola
    const splitte_Word=splitted_Word(word)
    console.log(splitte_Word);
    //qui rendiamo la parola al contrario
    const rev_array=array_reversed(splitted_Word)
    console.log(rev_array);
    //qui aggiungiamo la nostra parola al nostro array
    const reversal_array=join_String(rev_array)
    console.log(reversal_array);
    
    //qui iniziamo la nostra condizione
    if ( word.toLowerCase() === reversal_array.toLowerCase ) {
        //qui se entra in questa condizione ci dara true
        return true
    } 
    //qui se entra in questa condizione ci dara false
    return false
}

if (getPalindrom(word)) {
    console.log("your word is a palindrome",word);
}else{
    console.log("your word is not a palindrome",word);
}