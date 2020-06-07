//level2

//Section 1
// question 1

// Answer for question 1 
var counter;
for (var i = 15; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// question 2

// Answer for question 2 
function innerFunction () {
    console.log ("I am a function");
}
innerFunction();

function outerFunction(thefunction){
    console.log(thefunction);
}
outerFunction("final");
