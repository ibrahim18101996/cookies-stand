'use strict'
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', "12 pm", '1 pm',
'2 pm', '3 pm', '4 pm', '5 pm', "6 pm", '7 pm',`Total`];
var total=0;
function Salmon(name, min1 ,max1  , avrCoocHour) {
this.name = name;

this.min1 =  min1;
this.max1 =  max1 ;
this.avrCoocHour =  avrCoocHour;
this.randomCostumerArray = [];
this.avgSalesHoure= [];
this.allSope =[];
}
Salmon.prototype.getRandomCustomNum  = function(){
for (var i = 0; i < hours.length -1; i++) {
        this.randomCostumerArray.push(getRandomNum(this.min1, this.max1))
        this.avgSalesHoure[i] = Math.ceil(6.3 * this.randomCostumerArray[i])
        total = total + this.avgSalesHoure[i]
}
        this.avgSalesHoure.push(total);
}
function getRandomNum(min , max ) {
   var  minRan = Math.ceil(min);
   var maxRan = Math.floor(max);
    return Math.floor(Math.random() * (maxRan - minRan)) + minRan;
}
var myForm = document.getElementById('form1');
myForm.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(event);
    name =event.target.name.value;
    console.log(name);
    var min1 = event.target.min1.value;
    console.log(min1);
    var max1 =event.target.max1.value;
    console.log(max1);
    var sales =event.target.sales.value;
    console.log(sales);


    if (name == "") {
        alert("Name must be filled out");
        return false;
      }
      if (min1 == "") {
        alert("Name must be filled out");
        return false;
      }
      if (max1 == "") {
        alert("Name must be filled out");
        return false;
      }
      if (sales == "") {
        alert("Name must be filled out");
        return false;
      }
      while (min1>max1){
          alert("the min is bigger than max please fix it")
          return false;
      }

 var name = new Salmon(name,min1,max1,sales);
name.getRandomCustomNum();
name.printSales();

form1.reset();
})

// header//...................................................................
var table = document.getElementById('container');
var tablEl = document.createElement('table');
table.appendChild(tablEl);
var tablehead = document.createElement('thead')
tablEl.appendChild(tablehead);
var th1 = document.createElement('th')
tablehead.appendChild(th1);
th1.textContent = "location";
for(var i = 0; i < hours.length ;i ++){
    var th1 = document.createElement('th');
    tablehead.appendChild(th1);
    th1.textContent = hours[i];
    
}

// rander footer .........................................................................
Salmon.prototype.printSales  = function(){
    var tableRow = document.createElement('tr')
    tablEl.appendChild(tableRow);
    var td1 = document.createElement('td')
    tableRow.appendChild(td1);
    td1.textContent = this.name;
    for( var i =0 ; i < hours.length; i++){
       
        var td1 = document.createElement('td')
        tableRow.appendChild(td1);
        td1.textContent = this.avgSalesHoure[i];
        if (i > 13){
            i++;
            var td1 = document.createElement('td')
            tableRow.appendChild(td1);
            td1.textContent = this.avgSalesHoure[15];
        }
    }
    };
// footer.................................................................................
var sum = 0;
var tableFooter = document.createElement('tfoot');
tablEl.appendChild(tableFooter);
 var th1 = document.createElement('th')
 tableFooter.appendChild(th1);
th1.textContent = " Total ";
for(var i = 0; i < name.length ;i ++){
    var th1 = document.createElement('th');
    tableFooter.appendChild(th1);
    th1.textContent = sum[i];
}

    var seattle = new Salmon('Seatle',23,65,6.3);
    seattle.getRandomCustomNum();
    seattle.printSales();
    
    var tokyo = new Salmon('Tokyo',3,24,1.2);
    tokyo.getRandomCustomNum();
    tokyo.printSales();
    var dubai = new Salmon('Dubai',11,38,3.7);
    dubai.getRandomCustomNum();
    dubai.printSales();
    
    var paris = new Salmon('Paris',20,38,2.3);
    paris.getRandomCustomNum();
    paris.printSales();
    
    var lima = new Salmon('Lima',3,24,1.2);
    lima.getRandomCustomNum();
    lima.printSales();




// `use strict`;
// var hours = [ '6am','7am','8am','9am','10am','11am',"12am",'1am',
// '2am','3am','14am','5am',"6am",'am7','8am'];
// var Seattle = {
//     name : "Seattle" , 
//     min1: 23,   
//     max1: 65,
//     avrCoocHour : 6.3 ,
//     randomCostumerArray : [],
//     avgSalesHoure : [] ,  
//     getRandomCustomNum :  function () {
//         for(var i =0 ; i < hours.length ; i++)
//         {
//              this.randomCostumerArray.push(getRandomNum(this.min1,this.max1))
//              this.avgSalesHoure[i] =Math.ceil( 6.3 * this.randomCostumerArray[i] )
//         }
//         console.log(this.randomCostumerArray)
//         console.log(this.avgSalesHoure)
//     }
// };
// var Tokyo = {
//     name : "Tokyo" , 
//     min1: 3,    
//     max1: 24,
//     avrCoocHour : 1.2 ,
//     randomCostumerArray : [],
//     avgSalesHoure : [] ,  
//     getRandomCustomNum :  function () {
//         for(var i =0 ; i < hours.length ; i++)
//         {
//              this.randomCostumerArray.push(getRandomNum(this.min1,this.max1))
//              this.avgSalesHoure[i] =Math.ceil( 6.3 * this.randomCostumerArray[i] )
//         }
//         console.log(this.randomCostumerArray)
//         console.log(this.avgSalesHoure)
//     }
// };
// var Dubai = {
//     name : "Dubai" , 
//     min1: 11,   
//     max1: 38,
//     avrCoocHour : 3.7 ,
//     randomCostumerArray : [],
//     avgSalesHoure : [] ,  
//     getRandomCustomNum :  function () {
//         for(var i =0 ; i < hours.length ; i++)
//         {
//              this.randomCostumerArray.push(getRandomNum(this.min1,this.max1))
//              this.avgSalesHoure[i] =Math.ceil( 6.3 * this.randomCostumerArray[i] )
//         }
//         console.log(this.randomCostumerArray)
//         console.log(this.avgSalesHoure)
//     }
// };
// var Paris = {
//     name : "Paris" , 
//     min1: 20,   
//     max1: 38,
//     avrCoocHour : 2.3 ,
//     randomCostumerArray : [],
//     avgSalesHoure : [] ,  
//     getRandomCustomNum :  function () {
//         for(var i =0 ; i < hours.length ; i++)
//         {
//              this.randomCostumerArray.push(getRandomNum(this.min1,this.max1))
//              this.avgSalesHoure[i] =Math.ceil( 6.3 * this.randomCostumerArray[i] )
//         }
//         console.log(this.randomCostumerArray)
//         console.log(this.avgSalesHoure)
//     }
// };
// var Lima = {
//     name : "Lima" , 
//     min1: 2,    
//     max1: 16,
//     avrCoocHour : 4.6 ,
//     randomCostumerArray : [],
//     avgSalesHoure : [] ,  
//     getRandomCustomNum :  function () {
//         for(var i =0 ; i < hours.length ; i++)
//         {
//              this.randomCostumerArray.push(getRandomNum(this.min1,this.max1))
//              this.avgSalesHoure[i] =Math.ceil( 6.3 * this.randomCostumerArray[i] )
//         }
//         console.log(this.randomCostumerArray)
//         console.log(this.avgSalesHoure)
//     }
// };
// console.log(Seattle.getRandomCustomNum());
// console.log(Tokyo.getRandomCustomNum());
// function getRandomNum(min , max ) {
//     minRan = Math.ceil(min);
//     maxRan = Math.floor(max);
//     return Math.floor(Math.random() * (maxRan - minRan)) + minRan;
// }
// // console.log(getnum)
// var container = document.getElementById('container');
// console.log(Seattle.getRandomCustomNum());
// console.log(Tokyo.getRandomCustomNum());
// function getRandomNum(min , max ) {
//     minRan = Math.ceil(min);
//     maxRan = Math.floor(max);
//     return Math.floor(Math.random() * (maxRan - minRan)) + minRan;
// }
// // console.log(getnum)
// var container = document.getElementById('container');
// printSales(hours,Seattle);
// printSales(hours,Tokyo);
// printSales(hours,Dubai);
// printSales(hours,Paris);
// printSales(hours,Lima);
// function printSales(hours , obj) {
//     var SubTitle = document.createElement('h3');
//     SubTitle.textContent=obj.name; 
//     container.appendChild(SubTitle);
//     var list = document.createElement('ul');
//     container.appendChild(list);
     
//      var arr = obj.avgSalesHoure;
//     var total =0 ; 
//     for (let index = 0; index < hours.length; index++) {
//         total = total +  arr[index];
//         var listItem = document.createElement('li'); 
//         listItem.textContent = hours[index]  + " : " + arr[index] + " Cookies" ; 
//         list.appendChild(listItem) ; 
//     }
//     var listItemTotal = document.createElement('li'); 
//         listItemTotal.textContent = "Total"  + " : " + total + " Cookies" ; 
//         list.appendChild(listItemTotal) ; 
// }
