$(function(){
    var schedule_0 = [{name:"SLEEP", repeat:31},{name:"WAKEUP", repeat:1},{name:"SHOWER", repeat:2},{name:"BREAKFAST", repeat:1},{name:"BUS", repeat:1},{name:"WORK", repeat:10},{name:"LUNCH", repeat:2},{name:"BREAK", repeat:3},{name:"WORK", repeat:8},{name:"SHOPPING", repeat:2},{name:"BUS", repeat:1},{name:"TV", repeat:4},{name:"DINNER", repeat:4},{name:"BAR", repeat:5},{name:"BATH", repeat:2},{name:"READ", repeat:3},{name:"SNACK", repeat:1}];
    var schedule_8 = [{name:"SLEEP", repeat:29},{name:"WAKEUP", repeat:1},{name:"SHOWER", repeat:2},{name:"BREAKFAST", repeat:1},{name:"BUS", repeat:1},{name:"WORK", repeat:10},{name:"LUNCH", repeat:2},{name:"BREAK", repeat:3},{name:"WORK", repeat:15},{name:"SHOPPING", repeat:2},{name:"BUS", repeat:2},{name:"DINNER", repeat:2},{name:"TV", repeat:4},{name:"INTERNET", repeat:4},{name:"NIGHT MARKET", repeat:2},{name:"BATH", repeat:1}];
    
    function init(){
        var data_0 = new Array();
        var data_8 = new Array();
        
        $.each(schedule_0,function(index,activity){
            for(var i=0 ; i<activity.repeat ; i++){
                data_0.push(activity.name);
            }
        })
        
        $.each(schedule_8,function(index,activity){
            for(var i=0 ; i<activity.repeat ; i++){
                data_8.push(activity.name);
            }
        })
        
        spawn(data_0,"#time_left",450,6);
        spawn(data_8,"#time_right",450,27);
    }
    
    init();
    
    function spawn(data, target, size=20, offset=0){        
        for(var i=offset ; i<size+offset ; i++){
            $(target).append("<div>"+data[i%data.length]+"</div>");
        }
    }    
})