/**
 * Begin hier met coderen
 */

// laat x een getal zijn met waarde 5
let x: number = 5;

// x is een variabele, dus je kan hem ook een andere waarde geven
x = 7;
// je kan x ook zijn eigen waarde meegeven (wat is nu de waarde van x?)
x = x + 1;

// je kan rekenen met variabelen.
let dubbelX: number = x + x;

let y: number = 3;
let dubbelY: number = y + y;

// console.log kan een variabele naar de console printen
console.log(
  "x is " + x.toString() + "; het dubbele van x is: " + dubbelX.toString(),
);
console.log(
  "y is " + y.toString() + "; het dubbele van y is: " + dubbelY.toString(),
);
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
    return n;
  } else {
    return -n;
  }
}

// probeer zelf wat variabelen te maken zoals daarboven en print ze met console.log()
console.log("");
console.log("-----------------------------------------");

// soms wil je verschillende dingen bij elkaar zetten.