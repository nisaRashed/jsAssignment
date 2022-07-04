//Q2

// var no = prompt("enter 1st number");
// var no2 = prompt("enter 2nd number");
// if(no>no2){
//     document.write(no+" is greater than " + no2);
// }
// else if(no<no2){
//     document.write(no2+" is greater than " + no);
// }
// else{
//     document.write(no2+" is equal to " + no);
// }
//Q3

// var no = prompt("enter a number");

// if(no>0){
//     document.write(no+" is positive ");
// }
// else if(no<0){
//     document.write(no+" is negative ");
// }
// else if(no==0){
//     document.write(no+" is zero ");
// }

//Q3

// var character= prompt("enter a character");
//  var  vowels= ['a','e','i','o','u'];
//  var flag;

//  for(var i=0; i<vowels.length;i++){
//     if(character==vowels[i])
//     {
//        document.write("Character is a vowel");
//        break;
       
//     }
//     else
// {     document.write("Character is not a vowel");
// }
    
//  }

//Q5

// var corect= "NISA";
// var enter= prompt("enter your password");

// if(enter==0){
//     document.write("please enter your password");
// }
// else if(enter==corect){
//     document.write("Correct! The password you entered matches the original password");
// }
// else if(enter!=corect){
//     document.write("incorrect password");
// }

//Q6

var greeting;
var hour = 13;
if (hour < 18) 
{
greeting = "Good day";
}
else{
greeting = "Good evening";
}
document.write(greeting);
//Q7
// var tm = prompt("enter time");

// if(tm>=0000 || tm<1200){
//     document.write("good morning");
// }
// else if(tm>=1200 || tm<1700){
//     document.write("good afternoon");
// }
// else if(tm>=1700 || tm<2100){
//     document.write("good evening");
// }
// else if(tm>=2100 || tm<2359){
//     document.write("good night");
// }