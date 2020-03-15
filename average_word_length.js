avgWordLengthCalc = function ( text ) {
    let words = text.split(' ');
    let cumLen = 0;
    for ( let i = 0; i < words.length; i++ ) {
        words[i] = words[i].replace( /\.|\,|\?|\!|\;/, '' );
        cumLen += words[i].length;
    }
    return Math.fround( cumLen / words.length );
};