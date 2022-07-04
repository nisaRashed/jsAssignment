// Q1:
var age= " i am 20 years old";
  alert(age);

   
// Q:2 Declare & initialize a variable to keep track of how many
//  times a visitor has visited a web page. Show his/her
//  number of visits on your web page. For example: “You
//  have visited this site N times”.

      
     for( var a=0; a<5; ){

        onload=a++;
       
      }
      document.write("you have visited this website "+a + "times.");

 // Q3: Declare a variable called birthYear & assign to it your birth year.Show the following message in your browser:
 var birthYear = 1999;
 document.write("My birth year is" + birthYear + " data type of my declared variable is " + "<b>"+ typeof birthYear + "</b>");

// Q4: A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var name= prompt("enter your name:");
var prduct= prompt("which product you want to purchase?");
var quantity= prompt("how many products you want to order?");

document.write("<h1>" +name + " ordered " + quantity + prduct +" on NISA clothing store " + "</h1>");

