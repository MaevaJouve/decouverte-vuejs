//2.1 Fonctions simples
const sayHello = () => console.log('Hello');

const sayMyName = (first, last) => console.log(first, last);

const sayMyAge = (age) => console.log('You are ' + age + ' years old');


sayHello();
sayMyName('Odile', 'Crok');
sayMyAge(23);

//----------------------//
//2.2 this

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false, // arrow functions: tout est unbindé (fonction anonyme), le this fera référence à window (DOM)
    showThis: function() { // peut pas utiliser arrow functions dans les méthodes et constructeurs
        console.log(this) // bind à son objet / retourne l'objet global: tableau avec clés et valeurs
    }
    // showThis(){console.log(this)} : méthode pour raccourcir
};

object.showThis();

/* this retourne l'objet global
this est un opérateur qui permet de retourner une valeur en fonction de son contexte.
Deux éléments peuvent influer dessus :
Le contexte dans lequel this est appelé : global, fonction, fonction fléchée, méthode d’un objet…
Le mode utilisé : strict ou non-strict.
 */

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    sayHello: () => console.log('Hello'),
    sayMyName: function () {
        console.log(this.name.first + ' ' + this.name.last)
    },
    sayMyAge: function() {
        console.log('You are ' + this.age + ' years old')
    }
};

odile.sayHello()
odile.sayMyName()
odile.sayMyAge()
