$(function(){
    var initialSize = 450;
    
    var Dots = [
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"},
        {size:1,color:"black"}
    ]
    
    function init(){
        spawn(Dots,"#dots",16);
        for(var i=1 ;  i < initialSize ; i++){
            $.each(Dots,function(index,dot){
                
                var probability = Math.random();
                
                /* Handle Size */
                if(probability >= 0.7){
                    if(dot.size > 1){
                        dot.size --;
                    }
                }else if(probability >= 0.6){
                    if(dot.size < 6){
                        dot.size ++;                    
                    }
                }
                
                /* Handle Color */
                if(dot.color == "black"){
                    if(probability >= 0.995){
                        dot.color = "red";
                    }
                }else{
                    if(probability >= 0.935){
                        dot.color = "black";
                    }
                }
            })
            spawn(Dots,"#dots",16);
        }
    }
    
    init();
    
    function spawn(data, target, size=20, offset=0){
        for(var i=offset ; i<size+offset ; i++){
            if(data[i].color == "red"){
                $(target).append("<div class='col size-"+data[i].size+" reddot'></div>");
            }else{
                $(target).append("<div class='col size-"+data[i].size+"'></div>");
            }
        }
    }
})