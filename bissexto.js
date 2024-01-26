cont = 0;

for (let i = 1900; i <= 2024; i++) {
    
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {

        console.log(i + " é bissexto!");

        cont++;

    } else {

        console.log(i + " não é bissexto!");
    }

}

console.log("Ao longo dos anos de 1900 até 2024, tivemos um aumento de " + cont + " dias ")




