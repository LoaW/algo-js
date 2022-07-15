let arr = [1, 2, 3, 4, 5]
let items = arr.length



if (items % 2 === 0) {
    console.log(arr[items / 2 - 1] + " or " + arr[items / 2] ) 
}
else{
    let x = (items / 2) - 0.5 
    console.log(arr[x])
}