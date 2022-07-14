let min = prompt("Enter a small number");
let max = prompt("Enter a large number");
let current = prompt("Enter a number");

if (current <= max && current >= min) {
    console.log("Good, " + current + " is between " + min + " and " + max )
}
else if(min > max){
    console.log("Humm something go wrong, your small number ("+ min + ") seems to big than your big number (" + max + ") ...")
}