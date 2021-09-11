const p = 3.14;

var calcCircumfrence = (radio) => {
    return 2 * p * radio;
}

var calcArea = (radio) => {
    return radio * p * radio;
}

console.log(`La circunferencia es ${calcCircumfrence(5)}`);
console.log(`El área es ${calcArea(5)}`);

console.log("==========");

var calculateDogAge = (anios, tasa=7) => {
    return anios * tasa;
}

for (let i = 1; i <= 3; i++) {
    var anio = Math.floor((Math.random() * (6 - 2 + i)) + 2);
    console.log(`Año: ${anio}`);
    console.log(`¡Tu perrito tiene ${calculateDogAge(anio)} años en años de perro!`);
}

var custom = 5;
console.log(`Año: ${custom}`);
console.log(`¡Tu perrito tiene ${calculateDogAge(custom, 8)} años en años de perro!`);
