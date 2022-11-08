const SezionePariDispariEl = document.querySelector(".PariDispari");
const Btn = SezionePariDispariEl.querySelector("button");

Btn.addEventListener("click", function(){
    const inputEl = SezionePariDispariEl.querySelector('[name="numero"]');
    const risultatoEl = document.querySelector(".risultato");

    const risultato = getPariDispari(parseInt(inputEl.value));

    risultatoEl.innerHTML = `Il numero ${inputEl.value} é ${risultato}`;
})

/** 
 * @param {number} num
 * @return {string}
 */
function getPariDispari (num){

    if (isNaN( num )){
        return "non valido";
    }

    if( num % 2 === 0){
        return "Pari";
    }else {
        return "Dispari";
    }
}

// 1 numero random dal pc 
// 2 sommare i due numeri 
// 3 far capire se la somma è P o D
// 4 confrontare le 2 stringe pc e utente 
// 5 creare if per il confronto 
// 6 comunicare all utente se ha vinto o perso