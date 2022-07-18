function rand10(min, max) {
    return Math.random() * (max - min) + min;
}

function multiRand(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor (rand10(1, 10)))
    }
    console.log(arr)
}

multiRand(5)