//Q1
var arr1 = ["ABC", 24, 18000];

//Q2

var arr2 = ["0 1 2 3", "1 0 1 2", "2 1 0 1"];
document.write(arr2[0]);
document.write("<br>");
document.write(arr2[1]);
document.write("<br>");
document.write(arr2[2]);

//Q3

for(var i=1; i<=10; i++){
    document.write(i + "<br>");

}
 //Q4

var no=prompt("enter no");
var lenth=propmt("enter length of table:");

for(var n=1; n<=lenth; n++){
    var out=no*n;
    document.write(no + "*" + n +"=" + out + "<br>");

}

//Q5

var fruits=["apple","orange","mango","strawberry"];
for(var j=0; j<fruits.length; j++){ 
    document.write(fruits[j] + "<br>");
   
}
var fruit=["apple","orange","mango","strawberry"];
for(var k=0; k<fruit.length; k++){

    document.write("element at index" + k + "is" + fruits[k]+ "<br>");
}
//Q6
var arr1=[1,2,3,4,5,6,7,8,9,10];
document.write("counting");
for(var i=0; i<10; i++){
       document.write(arr1[i] +"," );
    
     }

     //Q7
var arr1=[1,2,3,4,5,6,7,8,9,10];
   document.write("reverse");
   arr1.reverse();
    for(var i=0; i<10; i++)
    {
    document.write(arr1[i] +"," );
    }
//Q8
var arr1=[0,2,4,6,8,10,12,14,16,18,20];
   document.write("even");
  
    for(var i=0; i<10; i++)
    {
    document.write(arr1[i] +"," );
    }
//Q9
var arr1=[1,3,5,7,9,11,13,15];
   document.write("odd");
  
  for(var i=0; i<8; i++)
    {
    document.write(arr1[i] +"," );
    }
//Q10

var arr1=["2k","4k","6k","8k","10k","12k","14k","16k"];
   document.write("Series");
  
    for(var i=0; i<10; i++)
    {
    document.write(arr1[i] +"," );
    }

//Q11

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var b=prompt("enter an item");
for(var n=0; n<A.length; n++){
    if(b==A[n]){
        document.write(b+ "is available"+ A[n]);
    }
}

//Q12

var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
document.write(largest);

//Q13

var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var smallest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (smallest > arr[i] ) {
        smallest = arr[i];
    }
}
document.write(smallest);

//Q14

 var no=5;


 for(var n=1; n<=l00; n++){
     var out=no*n;
    document.write(no + "*" + n +"=" + out + "<br>");

 }