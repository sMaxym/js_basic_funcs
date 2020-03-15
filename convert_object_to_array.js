toArr = function ( obj ) {
    if ( typeof obj !== 'object' ) {
        return obj;
    }
    let objArr = [];
    Object.keys( obj ).forEach( key => objArr.push( [ key, toArr( obj[ key ] ) ] ) );
    return objArr;
};