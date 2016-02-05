// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    if(myObj.hasOwnProperty(checkProp)) {
        console.log(myObj[checkProp]);
        console.log("test");
    } else {
        console.log("test2");
    }

}

// Test your code by modifying these values
checkObj("gift");
