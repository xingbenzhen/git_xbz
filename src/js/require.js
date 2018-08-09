var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function require(arr, ck) {
    return arr
}
console.log(require(a))


function define(a) {

    a.map(function(i) {
        console.log(i)
    });
}
console.log(define(a))