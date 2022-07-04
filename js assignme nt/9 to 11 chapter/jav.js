//Q1
var cityName=prompt("enyter city name?");
if(cityName=="karachi"){
    document.write("welcome to city of lights");
}

//Q2
var gender=prompt("eenter your gender");
if(gender=="male"){
    document.write("welcome Sir");
}else{
    document.write("welcome madam");
}

//Q3

var gender=prompt("enter signal color");
if(gender=="red"){
    document.write("must stop");
}else if(gender==yellow){
    document.write("ready to move");
}else if(gender==green){
    document.write("move now");
}

//Q4

var fuel=prompt("enter remaining fuel in car");
if(fuel<2.5){
    document.write("please refill fuel in your car");
}

//Q5

var eng= prompt("enter english marks");
var urdu= prompt("enter urdu marks");
var math= prompt("enter math marks");
var total= prompt("enter total marks");
var obt= end+urdu+math;
var percentage= obt/total*100;
if(percentage>=80){
    document.write("total marks" + total);
    document.write("obtained marks" + obt);
    document.write("percentage" + percentage+ "%");
    document.write("Grade A-one" );
    document.write(" Excellent");
}
else if(percentage>=70){
    document.write("total marks" + total);
    document.write("obtained marks" + obt);
    document.write("percentage" + percentage+ "%");
    document.write(" Grade A" );
    document.write("Good" );
}
else if(percentage>=60){
    document.write("total marks" + total);
    document.write("obtained marks" + obt);
    document.write("percentage" + percentage+ "%");
    document.write("GRADE B" );
    document.write("you need to improve" );
}
else(percentage<60){
    document.write("total marks" + total);
    document.write("obtained marks" + obt);
    document.write("percentage" + percentage+ "%");
    document.write("GRADE fail" );
    document.write("Sorry" );
}

//Q6
var secret=4;
var guess=prompt("guess secret number");
if(guess==secret){
    document.write("bango! correct answer");
}else if(guess==1){
    document.write("you are close enough to secret number");
}

//Q7

var no=prompt("enter a no");
if(no/3==0){
    document.write("non is divisible by 3");
}
else{
    document.write("no is not divisible byb 3");
}

//Q8

var no=prompt("enter a no");
if(no/2==0){
    document.write("no is even");
}
else{
    document.write("no is odd");
}
//Q9

var tem=prompt("enter temperature");
if(tem>40){
    document.write("it is too hot outside");
}
else if (tem>30){
    document.write("The weather today is normal");
}
else if (tem>20){
    document.write("The weather is cool");
}
else if (tem>10){
    document.write("OMG! the weather is so cool");
}

//Q10

var no=prompt("enter a no");
if(no/2==0){
    document.write("no is even");
}
else{
    document.write("no is odd");
}
//Q9

var num1=prompt("enter 1st number");
var num2=prompt("enter 2nd number");
var op=prompt("enter 3rd number");
if(op=="+"){
    document.write(num1+num2);
}
else if (op=="-"){
    document.write(num1-num2);
}
else if (op=="*"){
    document.write(num1*num2);
}
else if (op=="/"){
    document.write(num1/num2);
}
else if (op=="%"){
    document.write(num1%num2);
}