function insertNumber(number){
    var exsistingNumber = $("#result").val();

    $("#result").val(exsistingNumber + number);
};
function clearScreen(){
    $("#result").val(' ');
};
function calculate(){
   var result = eval($("#result").val());
   $("#result").val(result);

};
function deleteNumber(){
    var value = $("#result").val();
    if(value != ''){
        $("#result").val(value.slice(0,-1));
    }
};