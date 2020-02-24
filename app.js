`use strict`;
var hours = [ '6 am','7 am','8 am','9 am','10 am','11 am',"12 am",'1 pm',
'2 pm','3 pm','4 pm','5 pm',"6 pm",'7 pm','8 pm'];

function Salmon(name ,min1 ,max1 ,avrCoocHour ){
    this.name = name;
    this.min1 = min1;
    this.max1 = max1;
    this.avrCoocHour =avrCoocHour;
    this.randomCostumerArray =[];
    this.avgSalesHoure = [];

}

Salmon.prototype.gitAvrSalesHours = function(){
    for(var i =0 ; i < hours.length ; i++)
    {
         this.randomCostumerArray.push(Math.floor(Math.random() * (this.max1 - this.min1) ) + this.min1)
         this.avgSalesHoure[i] =Math.ceil(this.avrCoocHour * this.randomCostumerArray[i] )
    }
}
var container = document.getElementById('container');
Salmon.prototype.printSales=function (hours ) {
        var SubTitle = document.createElement('h3');
        SubTitle.textContent=name; 
        container.appendChild(SubTitle);
        var list = document.createElement('ul');
        container.appendChild(list);
         
         var arr = this.avgSalesHoure;
        var total =0 ; 
        for (let index = 0; index < hours.length; index++) {
            total = total +  arr[index];
            var listItem = document.createElement('li'); 
            listItem.textContent = hours[index]  + " : " + arr[index] + " Cookies" ; 
            list.appendChild(listItem) ; 
        }
        var listItemTotal = document.createElement('li'); 
            listItemTotal.textContent = "Total"  + " : " + total + " Cookies" ; 
            list.appendChild(listItemTotal) ; 
    }

var Seattle = new Salmon('seattle',23,65,6.3);
Seattle.gitAvrSalesHours();
Seattle.printSales(hours);

var Tokyo = new Salmon('Tokyo',3,24,1.2);
Tokyo.gitAvrSalesHours();
Tokyo.printSales(hours);

var Dubai = new Salmon('dubai',11,38,3.7);
Dubai.gitAvrSalesHours();
Dubai.printSales(hours);

var Paris = new Salmon('Paris',20,38,2.3);
Paris.gitAvrSalesHours();
Paris.printSales(hours);

var Lima = new Salmon('Lima',3,24,1.2);
Lima.gitAvrSalesHours();
Lima.printSales(hours);

 





