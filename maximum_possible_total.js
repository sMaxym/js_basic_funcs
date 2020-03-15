maxTotal = function ( nums ) {
    return nums.sort( (a, b) => b - a ).reduce( ( sum, num, i ) => sum + ( i < 5 && num ), 0 );
};
