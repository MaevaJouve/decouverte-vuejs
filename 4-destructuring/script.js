//4.1 Découverte

const [a, b] = [1, 2, 3, 4];
// prend les valeurs d'un tableau et les transforme en variables locales
// chaque variable fait référence à un index du tableau
console.log(a);
console.log(b);

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35};
// variable référence chaque propriétés d'un objet
// devient une variable locale

console.log(first);
console.log(last);
console.log(age);

//4.2 Application

Object.values(data).forEach( perturbation => {
    const { texte, dateDebut, dateFin } = perturbation;
    console.log(texte + '\n \n Début : ' + dateDebut + '\n \n Fin : ' + dateFin)
})

