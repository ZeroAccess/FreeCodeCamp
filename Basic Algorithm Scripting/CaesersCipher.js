function rot13(str) { // LBH QVQ VG!
    var result = '';
    for (var i = 0; i < str.length; i++) {
        var letter = str.charCodeAt(i);
        if (letter < 78 && letter > 64) {
            letter += 13;
        } else if (letter > 76 && letter < 91) {
            letter -= 13;
        }
        result += String.fromCharCode(letter);
    }
    console.log(result);
}


// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");