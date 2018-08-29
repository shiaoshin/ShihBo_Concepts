$(function(){
    
    const toastDuration = 5000;
    
    /* Generate */
    $("#qr_submit").on("click",function(){
    
        $("#qr_output").html("");
        
        var input = $("#qr_input").val();
        var chars = input.split("");
        
        $.each(chars,function(ind, alphabet){
            var validate = alphabet.match(/[A-Za-z]/);
            if(validate != null){
                $("#qr_output").append("<img src='img/alphabets/"+alphabet.toLowerCase()+".png'>");
            }else{
                var msg = (alphabet == " ")?"space":alphabet;
                M.toast({html: msg+" is not supported!", displayLength: toastDuration});
            };
        })
        
        $("#qr_common").text("Add Common");
    })
    
    /* Add Common */
    $("#qr_common").on("click",function(){
        if($(this).text() == "Add Common"){
            $("#qr_output > img").addClass("common");
            $(this).text("Remove Common");
        }else{
            $("#qr_output > img").removeClass("common");
            $(this).text("Add Common");
        }
    })
})