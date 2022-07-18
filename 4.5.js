// let aX = -2, aY = 2
// let bX = 2, bY = -2

// let distance = Math.sqrt(Math.pow((aX - bX), 2) + Math.pow((aY - bY), 2))

// console.log(distance)

function calcDistance (aX, aY, bX, bY){
    return Math.sqrt(Math.pow((aX - bX), 2) + Math.pow((aY - bY), 2))
}

console.log(calcDistance(-2, 2, 3, -2))