// Exo 1
for (let index = 0; index < 20; index++) {
    console.log("Bonjour");    
}
for (let index = 0; index < 21; index++) {
    console.log(index);
    if (index % 2 == 0) {
        console.log(`${index} est pair`);
    }
    else (
        console.log(`${index} est impair`)
    )
}

// Exo 2
let classe = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"]

for (let i = 0; i < classe.length; i++) {
    console.log("Bonjour " + classe[i]);   
}

// Exo 3
let nombre = parseInt(prompt('Un nombre'))
console.log(nombre.length);
for (let i = 0; i < nombre + 1; i++) {
    console.log(i);
}