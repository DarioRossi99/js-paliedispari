let parola = prompt("inserire un parola singola");

const parolaInversa = parola.split("").reverse().join("");
console.log(parolaInversa);

const parolaArrey = parola.split("");
let parolaVersa

for (let i = parolaArrey.length-1; i >= 0; i--) {
    parolaVersa += parolaArrey;
}
console.log(parolaVersa);

if (parola == parolaInversa){
    console.log("la parola " + parola + " é palindroma");
}else{
    console.log(parolaArrey.reverse());
    console.log("la parola " + parola + " NON è palindroma");
}
