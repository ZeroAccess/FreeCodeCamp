$(document).ready(function() {

    $('.button').click(function() {
        calculate($(this).attr('data-value'))
        //alert($(this).attr('data-value'));
    });

    var restoredValue = '';
    function calculate(value) {
        switch (value) {
            case 'AC':
                restoredValue = document.getElementById("output").innerHTML;
                document.getElementById("output").innerHTML = '';
                break;
            case 'CE':
                restoredValue = document.getElementById("output").innerHTML;
                document.getElementById("output").innerHTML = document.getElementById("output").innerHTML.slice(0, -1);
                break;
            case '%':
                restoredValue = document.getElementById("output").innerHTML;
                document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + value;
                break;
            case '/':
                restoredValue = document.getElementById("output").innerHTML;
                document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + value;
                break;
            case '*':
                restoredValue = document.getElementById("output").innerHTML;
                document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + value;
                break;
            case '-':
                restoredValue = document.getElementById("output").innerHTML;
                document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + value;
                break;
            case '+':
                restoredValue = document.getElementById("output").innerHTML;
                document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + value;
                break;
            case '.':
                document.getElementById("output").innerHTML += value;
                break;
            case 'ANS':
                if(restoredValue === ''){

                } else {
                    document.getElementById("output").innerHTML = restoredValue;
                    restoredValue = '';
                }


                break;
            case '=':
                restoredValue = document.getElementById("output").innerHTML;
                document.getElementById("output").innerHTML = eval(document.getElementById("output").innerHTML);
                break;
            default:
                document.getElementById("output").innerHTML += parseInt(value);
                break;
        }
    }
});