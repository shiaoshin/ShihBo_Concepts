$(function(){
    var roster = [{name:"Acquaintance", repeat:81},{name:"Friend", repeat:1}];
    
    function init(){
        var data = new Array();
        
        $.each(roster,function(index,names){
            for(var i=0 ; i<names.repeat ; i++){
                data.push(names.name);
            }
        })
        
        spawn(data,"#roster",450,50);
    }
    
    init();
    
    function spawn(data, target, size=20, offset=0){        
        for(var i=offset ; i<size+offset ; i++){
            $(target).append("<div class='"+data[i%data.length]+"'>"+data[i%data.length]+"</div>");
        }
    }
})