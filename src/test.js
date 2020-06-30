const {fromJS } =require('immutable');

let anExample = fromJS({
    a : "a",
    b : "b"
});
console.log(anExample);
console.log( "anExample is...", anExample.toJS() );

