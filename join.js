function separandoStrings (string) {
    let arrayDeSrings = string.split(' ');
    console.log(arrayDeSrings);
    
    let unindoString = arrayDeSrings.join(' ');
    console.log(unindoString);
}


separandoStrings('Olá Mundo!')