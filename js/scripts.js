

var beepBoop = function(number) {
    var name = $("#userName").val();
    var array = [];

    for (var i = 0; i <= number; i++){
        array.push(i);
    }



    
    var result = array.map(function(num){
        value = num.toString();
        if(num%3 === 0){
           return num ='"' + "I'm sorry, " +name+". I'm afraid I can't do that." + '"' + " ";
        }else if(value.includes(1)){

           return num = '"Boop!"'+ " ";
        }else if(value.includes(0)){

           return num = '"Beep!"' +" " ;
        }else{
            return num;
        }

    
    });
    return result;
}



$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var userNumber = parseInt($("#userNumber").val());
    var name = $("#userName").val();
    $("#output").text(beepBoop(userNumber));
    $("#reverse").text(beepBoop(userNumber).reverse());
    $(".op").show();

  });
});