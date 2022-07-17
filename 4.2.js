function rand10(min, max) {
    return Math.random() * (max - min) + min;
}

let result = rand10(1, 10)
console.log(Math.floor(result))