$(function(){
    var cards = [
        {name:"RBS VISA INFINITE CARD", credit:"inf"},
        {name:"RBS VISA PLATINUM CARD", credit:"100"},
        {name:"RBS VISA GOLD CARD", credit:"90"},
        {name:"RBS VISA COMMON CARD", credit:"20"},
        {name:"RBS MASTERCARD", credit:"20"},
        {name:"RBS MAESTRO", credit:"10"},
        {name:"RBS VISA DEBIT", credit:"5"},
        {name:"BANK OF SCOTLAND VISA INFINITE CARD", credit:"inf"},
        {name:"BANK OF SCOTLAND VISA PLATINUM CARD", credit:"100"},
        {name:"BANK OF SCOTLAND VISA GOLD CARD", credit:"85"},
        {name:"BANK OF SCOTLAND VISA COMMON CARD", credit:"30"},
        {name:"BANK OF SCOTLAND MASTERCARD", credit:"25"},
        {name:"BANK OF SCOTLAND MAESTRO", credit:"15"},
        {name:"BANK OF SCOTLAND VISA DEBIT", credit:"6"},
        {name:"HSBC VISA INFINITE CARD", credit:"inf"},
        {name:"HSBC VISA PLATINUM CARD", credit:"120"},
        {name:"HSBC VISA GOLD CARD", credit:"80"},
        {name:"HSBC VISA COMMON CARD", credit:"30"},
        {name:"HSBC MASTERCARD", credit:"25"},
        {name:"HSBC MAESTRO", credit:"15"},
        {name:"HSBC VISA DEBIT", credit:"5"},
        {name:"BARCLAYS VISA INFINITE CARD", credit:"inf"},
        {name:"BARCLAYS VISA PLATINUM CARD", credit:"111"},
        {name:"BARCLAYS VISA GOLD CARD", credit:"80"},
        {name:"BARCLAYS VISA COMMON CARD", credit:"35"},
        {name:"BARCLAYS MASTERCARD", credit:"20"},
        {name:"BARCLAYS MAESTRO", credit:"12"},
        {name:"BARCLAYS VISA DEBIT", credit:"6"},
        {name:"CLYDESDALE VISA INFINITE CARD", credit:"inf"},
        {name:"CLYDESDALE VISA PLATINUM CARD", credit:"110"},
        {name:"CLYDESDALE VISA GOLD CARD", credit:"80"},
        {name:"CLYDESDALE VISA COMMON CARD", credit:"30"},
        {name:"CLYDESDALE MASTERCARD", credit:"15"},
        {name:"CLYDESDALE MAESTRO", credit:"10"},
        {name:"CLYDESDALE VISA DEBIT", credit:"5"},
        {name:"LLOYDS TSB VISA INFINITE CARD", credit:"inf"},
        {name:"LLOYDS TSB VISA PLATINUM CARD", credit:"100"},
        {name:"LLOYDS TSB VISA GOLD CARD", credit:"90"},
        {name:"LLOYDS TSB VISA COMMON CARD", credit:"20"},
        {name:"LLOYDS TSB MASTERCARD", credit:"20"},
        {name:"LLOYDS TSB MAESTRO", credit:"10"},
        {name:"LLOYDS TSB VISA DEBIT", credit:"5"},
        {name:"STANDARD CHARTERED VISA INFINITE CARD", credit:"inf"},
        {name:"STANDARD CHARTERED VISA PLATINUM CARD", credit:"120"},
        {name:"STANDARD CHARTERED VISA GOLD CARD", credit:"90"},
        {name:"STANDARD CHARTERED VISA COMMON CARD", credit:"20"},
        {name:"STANDARD CHARTERED MASTERCARD", credit:"16"},
        {name:"STANDARD CHARTERED MAESTRO", credit:"10"},
        {name:"STANDARD CHARTERED VISA DEBIT", credit:"5"},
        {name:"AMERICAN EXPRESS INFINITE CARD", credit:"inf"},
        {name:"AMERICAN EXPRESS PLATINUM CARD", credit:"100"},
        {name:"AMERICAN EXPRESS GOLD CARD", credit:"80"},
        {name:"AMERICAN EXPRESS COMMON CARD", credit:"15"},
        {name:"NATWEST VISA INFINITE CARD", credit:"inf"},
        {name:"NATWEST VISA PLATINUM CARD", credit:"110"},
        {name:"NATWEST VISA GOLD CARD", credit:"85"},
        {name:"NATWEST VISA COMMON CARD", credit:"19"},
        {name:"NATWEST MASTERCARD", credit:"20"},
        {name:"NATWEST MAESTRO", credit:"10"},
        {name:"NATWEST VISA DEBIT", credit:"5"},
        {name:"SANTANDER VISA INFINITE CARD", credit:"inf"},
        {name:"SANTANDER VISA PLATINUM CARD", credit:"110"},
        {name:"SANTANDER VISA GOLD CARD", credit:"90"},
        {name:"SANTANDER VISA COMMON CARD", credit:"30"},
        {name:"SANTANDER MASTERCARD", credit:"20"},
        {name:"SANTANDER MAESTRO", credit:"15"},
        {name:"SANTANDER VISA DEBIT", credit:"5"},
        {name:"BANK OF IRELAND VISA INFINITE CARD", credit:"inf"},
        {name:"BANK OF IRELAND VISA PLATINUM CARD", credit:"110"},
        {name:"BANK OF IRELAND VISA GOLD CARD", credit:"95"},
        {name:"BANK OF IRELAND VISA COMMON CARD", credit:"25"},
        {name:"BANK OF IRELAND MASTERCARD", credit:"20"},
        {name:"BANK OF IRELAND MAESTRO", credit:"15"},
        {name:"BANK OF IRELAND VISA DEBIT", credit:"5"},
    ];
    
    function init(){
        var data_card = new Array();
        var data_credit = new Array();
        
        $.each(cards,function(index,card){
            data_card.push(card.name);
            if(card.credit == "inf"){
                data_credit.push("&#x221e;");
            }else{
                data_credit.push(card.credit+",000");
            }
        })
        
        spawn(data_card,"#card",450);
        spawn(data_credit,"#credit",450);
    }
    
    init();
    
    function spawn(data, target, size=20, offset=0){        
        for(var i=offset ; i<size+offset ; i++){
            $(target).append("<div>"+data[i%data.length]+"</div>");
        }
    }    
})