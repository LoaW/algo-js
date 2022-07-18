function rand10(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let inputAr = ["Julien", "Vincent", "Rinaldo", "Sophie", "Quentin", "Xavier", "Titouan", "Julien", "Stephanie", "Eddy" ]
let n = rand10(1, inputAr.length)

function pickLearner(arr, i) {
    console.log(arr[n])
}

pickLearner(inputAr, n)

