//1.1 Types simples

const name = 'Jacques';
let age = 80; // erreur avec const car la variable de l'âge est réinitialisée
let useless = 'something'; // erreur car la variable de l'âge change

console.log(name, age, useless);

age += 1;
useless = 14;

console.log(name, age, useless);

/*
Let et Const : scope local

const = constant : la variable est accessible uniquement en lecture.
la valeur contenue est immuable, uniquement que l'identifiant ne peut pas être réaffecté.
Autrement dit la valeur d'une constante ne peut pas être modifiée par des
réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau.

let : déclarer une variable dont la portée est celle du bloc courant,
éventuellement en initialisant sa valeur.
 */

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry'];
const vegetables = ['potato', 'curlyflower', 'tomato'];

console.log(fruits, vegetables);

fruits.push('banana');
vegetables.pop();

console.log(fruits, vegetables);

// Pas d'erreurs car on peut ajouter des éléments à un tableau
//mais pas affecter une nouvelle valeur

//----------------------//
//1.3 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
};

let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
};

console.log(settings, savedGame);

savedGame = {}; // Assignment to constant variable.
settings.music = true; // les clés d'un objet ne sont pas protégés
settings.resolution = [3840, 2160]; // les clés d'un objet ne sont pas protégés

console.log(settings, savedGame);

// ligne 60: assigne nouvelle valeur au tableau en lui même, ne peut être fait qu'avec let