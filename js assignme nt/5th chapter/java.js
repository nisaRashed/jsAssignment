// Q1
var a= prompt("enter 1st number:");
a=+a;
var b= prompt("enter 2nd number:");
b=+b;
var c = a+b;
c=+c;
document.write("sum of  " + a + " and " + b + " is " + c);

 //Q2
var a= prompt("enter 1st number:");
a=+a;
var b= prompt("enter 2nd number:");
b=+b;
var c = a*b;
c=+c;
document.write("sum of  " + a + " and " + b + " is " + c);

var a= prompt("enter 1st number:");
a=+a;
var b= prompt("enter 2nd number:");
b=+b;
var c = a-b;
c=+c;
document.write("sum of  " + a + " and " + b + " is " + c);

var a= prompt("enter 1st number:");
a=+a;
var b= prompt("enter 2nd number:");
b=+b;
var c = a/b;
c=+c;
document.write("sum of  " + a + " and " + b + " is " + c);
//Q4
var numb;
document.write("value of variable is " + numb + "<br>");
var numb = 2;
document.write("initial value is " + numb + "<br>");
numb++;
    document.write("value after increment is" + numb + "<br>");
numb=numb + 7;
document.write("value after adition is" + numb +" <br>");
numb--;
document.write("value after decrement is" + numb + " <br>");
numb= numb/3;
document.write("The rremainder is " + numb + " <br>");
// Q5
var price=600;
price= price*5;
document.write("total cost of buying 5 tickets to a movie is" + price+ " pkr " );
//Q6
var numbr=prompt("enter any number");
for(var i=1; i<11; i++){
  var output=  numbr*i;

    document.write(numbr + "*" + i + "=" + output);
    document.write("<br>");
}
// Q 7 
var a= 30;

var b= 80;

var faren=(b*9/5)+32;
var cel=  (a-32)*5/9;

document.write(a +" C " + " is " + faren+" F ");
document.write("<br>");
document.write(b +" F " + " is " + cel+" C ");

// Q 8

var price1= 30;
var price2= 100;
var qunty1= 3;
var qunty2=2;
var ship= 80;
var total= price1*qunty1+price2*qunty2;
document.write("total cost of your order is " + total);

// Q9: 
var totalMarks= 1000;
var obt = prompt(" enter obtained marks: ");
var avg= obt/1000*100;
document.write("<h1>" + " Marks Sheet" + "</h1>");
document.write("total marks"+ totalMarks);
document.write("obtained marks" + obt);
document.write("percentage: " + avg);

// Q10:
var usDollar= 10;
var riyals= 25;
var exchanged= usDollar*104.80+riyals*28;
document.write("total currrency in PKR " + exchanged);


// Q10: 
var no1=3;
var output= (no1+5*10)/2;
document.write(output);

// Q12: 
var current= 2022;
var birthYear= 1999;
var age= current-birthYear;
document.write(age);

// Q13
var r=4;
var circum=2*3.14*r;
document.write(circum);
var area= 2*3.142*r*r;
document.write(area);
//Q 14.
var snack= "chochochip";
var curent=20;
var max=70;
var amount=2;

document.write("you will eat " + max-current*365*2);
