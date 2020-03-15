pentagonalNumber = function (n) {
    return Math.round( ( 3 * n * n - n ) / 2 );
}

console.log( pentagonalNumber( 1 ) );
console.log( pentagonalNumber( 2 ) );
console.log( pentagonalNumber( 5 ) );
console.log( pentagonalNumber( 9 ) );