var num1 = 0;
var num2 = 0;
var response = 0;
var opRoll = 0;
var operator = '';
var answer = 0;
var cloneCount = 5;
var droidCount = 5;
generateProblem();

$('#submit').click(function(){
    response = $('#response')[0].value;
    if (response == answer) {droidCount -= 1; $('#droidCount').html(droidCount);}
    else {cloneCount -= 1; $('#cloneCount').html(cloneCount);}
    if (cloneCount <= 0) {
        /*$('#problem').html("You have been defeated. Wait 3 seconds to continue.");
        setTimeout(3000);*/
        cloneCount = 5;
        $('#cloneCount').html(cloneCount);
        droidCount = 5;
        $('#droidCount').html(droidCount);
        generateProblem();
    }
    else if (droidCount <= 0) {
        /*$('#problem').html("You have emerged victorious! Wait 3 seconds to continue.");
        setTimeout(3000);*/
        cloneCount = 5;
        $('#cloneCount').html(cloneCount);
        droidCount = 5;
        $('#droidCount').html(droidCount);
        generateProblem();
    }
    else {
        generateProblem();
    }
});
    
function generateProblem() {
    num1 = Math.floor((Math.random() * 20) + 1);
    num2 = Math.floor((Math.random() * 20) + 1);

    opRoll = Math.floor((Math.random() * 4) + 1);
    if (opRoll == 1) {operator = '+'; answer = num1 + num2;}
    else if (opRoll == 2) {operator = '-'; answer = num1 - num2;}
    else if (opRoll == 3) {operator = '*'; answer = num1 * num2;}
    else {operator = '/'; answer = num1 / num2;}

    $('#problem').html(num1 + " " + operator + " " + num2);
}