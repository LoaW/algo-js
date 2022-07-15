
let n = prompt ("Entrer un chiffre");
let b = 0;
let c = 0;
let i = 1;


while (i <= n) {
    b = parseInt (prompt());
    c = c + b;
    i ++;
}

console.log(c);


/*
LE FUTUR : 

let n = Number(prompt('Enter a number:'));
let r = 0, i = 0;
while(i < n)
{
    r += Number(prompt('Enter a number:'));
    i++;
}
console.log(r);
*/
