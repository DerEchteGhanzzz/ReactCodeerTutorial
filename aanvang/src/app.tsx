/**
 * Begin hier met coderen
 */

// druk 'ctrl + shift + `' in om een terminal te openen
// zorg ervoor dat je in de goede folder zit (aanvang)
// je ziet de huidige folder aan de onderkant van je terminal:
// Bij mij is dat: 'C:\CodeerTutorial\aanvang>'
// als je bijvoorbeeld C:\CodeerTutorial>, ziet voer dan `cd ./aanvang` uit.
// dit zet je in de goede folder.

// voer `npm run start` uit. Dit draait het programma.

// laat x een getal zijn met waarde 5
let x: number = 5;
// x is een variabele, dus je kan hem ook een andere waarde geven
x = 7;

// laat b een Boolean zijn met waarde false
let b: boolean = false;

if (b) {
  console.log('b is waar!');
}

// laat a een string zijn met waarde "Hallo"
let a: string = "Hallo";

// Grr! x is al een number, maar nu is x een string. Dat mag niet!
// x = "5";

console.log("Bug gefixt!");

// je kan x ook zijn eigen waarde meegeven (wat is nu de waarde van x?)
x = x + 1;

// je kan rekenen met variabelen.
let dubbelX: number = x + x;

let y: number = 3;
let som: number = y + x;

// console.log kan een variabele naar de console printen
console.log(
  "x is " + x.toString() + "; het dubbele van x is: " + dubbelX.toString(),
);
console.log("y is " + y.toString() + "; het x + y = " + som.toString());
console.log("-----------------------------------------");

// Oke, mooi is dat, maar als ik voor elk getal het dubbele wil uitrekenen,
// dan moet ik elke keer weer opnieuw hetzelfde schrijven.
// Daarom is er: de functie!
// een functie neemt een set aan argumenten (in dit geval het number 'n'),
// een functie voert dingen uit die tussen de accolades staan,
// en een functie geeft een output. In dit geval ook een number
function verdubbel(n: number): number {
  let dubbele = n + n;
  return dubbele;
}

console.log(
  "x is " + x.toString() + "; het dubbele van x is: " + verdubbel(x).toString(),
);
console.log("-----------------------------------------");

// hier zijn nog wat functies:
function verdrievoudig(n: number): number {
  let drievoudige = n + n + n;
  return drievoudige;
}

function kwadrateer(n: number): number {
  let kwadraat = n * n;
  return kwadraat;
}

// deze functie berekent de absolute waarde van een getal (zoals de naam al zegt)
// als een getal positief is, maakt het niet uit. Dan geven we het terug,
// maar als een getal negatief is, moeten we hem keer -1 doen.
function absoluteWaarde(n: number): number {
  // een 'if statement'. Tussen de haken staat een conditie. Als de conditie waar is (true)
  // doe dan wat er tussen de accolades staat. Anders, doe het andere 'else' stuk.
  // Een if statement is gewoon een flow-chart.
  if (n > 0) {
    console.log('positief getal gevonden!');
    return n;
  } else {
    console.log('negatief getal gevonden!');
    return -n;
  }
}

// probeer zelf wat variabelen te maken zoals daarboven en print ze met console.log()
console.log("absolute waarde van 4: ");
console.log(absoluteWaarde(4));
console.log("absolute waarde van -4: ");
console.log(absoluteWaarde(-4));


console.log("-----------------------------------------");

// soms wil je verschillende dingen bij elkaar zetten.
// Dit heet een Object. Hieronder staat bijvoorbeeld een object van een auto:

interface Auto {
  merk: string;
  deuren: number;
  pk: number
}

// een voorbeeld auto:
let golf: Auto = { merk: 'Volkswagen', deuren: 5, pk: 112 }
let passaat: Auto = { merk: 'Volkswagen', deuren: 5, pk: 150 }
let corvette: Auto = { merk: 'Chevrolet', deuren: 3, pk: 600 }

// het mooie van een object is dat je het kan beschouwen als een nieuw type
// je kan dus ook weer functies schrijven die specifiek voor dit object zijn.

function isGezinsauto(auto: Auto) {
  //      de punt geeft aan 'deuren' is een onderdeel (een veld) van dit object.
  //      v 
  if (auto.deuren === 5) {
    return true;
  }
  return false;
}

console.log("Een golf is een gezinsauto: " + isGezinsauto(golf));
console.log("Een passaat is een gezinsauto: " + isGezinsauto(passaat));
console.log("Een corvette is een gezinsauto: " + isGezinsauto(corvette));

let gezinsCorvette = { merk: corvette.merk, deuren: 5, pk: corvette.pk }
console.log("Een gezinscorvette is een gezinsauto: " + isGezinsauto(gezinsCorvette));

console.log("-----------------------------------------");





// Bijvoorbeeld in een lijst of een array.

let fibbonaccis: number[] = [1, 1, 2, 3, 5, 8, 13];
                    // ^
                    // de blokhaken geven aan: dit is een lijst van getallen
                    // uit een lijst kan je elementen halen door te indexeren
let eerste: number | undefined = fibbonaccis.at(0);

// wat is de waarde van eerste?
console.log('eerste fibbonacci getal: ' + eerste!.toString());

// wat is de waarde van het honderdste getal uit deze lijst?
let outOfBounds: number | undefined = fibbonaccis.at(99);
console.log('het honderdste fibbonacci getal: ' + outOfBounds!.toString());

let laatste: number | undefined  = fibbonaccis.at(fibbonaccis.length - 1);
let eenNaLaatste: number | undefined  = fibbonaccis.at(fibbonaccis.length - 2);
console.log('een na laatste (berekende) fibbonacci getal: ' + eenNaLaatste!.toString());
console.log('laatste (berekende) fibbonacci getal: ' + laatste!.toString());

// je kan ook toevoegen aan een lijst!
let volgendeGetal = laatste! + eenNaLaatste!;

fibbonaccis.push(volgendeGetal);