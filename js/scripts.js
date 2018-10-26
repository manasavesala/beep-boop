var beepBoop = function(number) {
    // var zero = srt.matches(/[^1-9]/);
    var name = $("#userName").val();
    var array = [];
    for (var i = 0; i <= number; i++){
        array.push(i);
    }
    
    for(var i = 0; i <= array.length; i++){
        debugger;
        if(array.includes(0)){
            array[i] = "'Beep!'" + " ";
        }
        if(array.includes(1)){
            array[i] = "'Boop!'" + " ";

        }
        if(array[i]%3 === 0){
            array[i] ='"' + "I'm sorry, " +name+". I'm afraid I can't do that." + '"' + " ";
        }


    }
    return array;
};



$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var userNumber = parseInt($("#userNumber").val());
    var name = $("#userName").val();
    $("#output").text(beepBoop(userNumber));

  });
});