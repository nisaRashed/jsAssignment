//Q1
var a= 10;
++a;
document.write("The value of ++a is "+ a);

document.write("<br>");
document.write("<br>");
document.write("Now the value of a is " + a);
document.write("<br>");
document.write("<br>");
a++;
document.write("Nhe value of a++ is " + a);
document.write("<br>");
document.write("<br>");
document.write("Now the value of a is " + a);
document.write("<br>");
document.write("<br>");
--a;
document.write("Nhe value of --a is " + a);
document.write("<br>");
document.write("<br>");
document.write("Now the value of a is " + a);
document.write("<br>");
document.write("<br>");
a--;
document.write("The value of a-- is " + a);
document.write("<br>");
document.write("<br>");
document.write("Now the value of a is " + a);
document.write("<br>");
document.write("<br>");

//Q1
// var nam=prompt("whats your good name?");

// document.write("Hey" +nam + "welcome to my website"); 

//Q2

// var numbr=prompt("enter any number");
// if(numbr!=0){
// for(var i=1; i<11; i++)
//     {
//         var output=  numbr*i;

//     document.write(numbr + "*" + i + "=" + output);
//     document.write("<br>");
//     }
// }

// else if (numbr==0){
   
//     for(var n=1; n<11; n++){
//         var a=5;
//         var out=  a*n;

//         document.write(a + "*" + n + "=" + out);
//         document.write("<br>");
//     }
   
//   }
//Q3
var sub1=prompt("enter subject one:");
var sub2=prompt("enter subject two:");
var sub3=prompt("enter subject three:");
var obt1=prompt("enter obtained marks in subject 1:");
obt1=+obt1;

var obt2=prompt("enter obtained marks in subject 2:");
obt2=+obt2;
var obt3=prompt("enter obtained marks in subject 3:");
obt3=+obt3;
var total=100;
var ftotal=300;

var totalObt=obt1+obt2+obt3;
totalObt=+totalObt;
var perc1=(obt1/100)*100;
var perc2=(obt2/100)*100;
var perc3=(obt3/100)*100;
var percentage=(obt1+obt2+obt3/300)*100;

document.write("<table>");
document.write("<tr>");

document.write("<td>");
document.write("Subject");
document.write("</td>");
document.write("<th>");
document.write("Total");
document.write("</td>");
document.write("<td>");
document.write("Obtained");
document.write("</td>");
document.write("<td>");
document.write("Percentage");
document.write("</td>");
document.write("</tr>");

document.write("<tr>");


document.write("<td>");
document.write(sub1);
document.write("</td>");
document.write("<td>");
document.write(total);
document.write("</td>");
document.write("<td>");
document.write(obt1);
document.write("</td>");
document.write("<td>");
document.write(perc1);
document.write("</td>");
document.write("</tr>");

document.write("<tr>");

document.write("<td>");
document.write(sub2);
document.write("</td>");
document.write("<td>");
document.write(total);
document.write("</td>");
document.write("<td>");
document.write(obt2);
document.write("</td>");
document.write("<td>");
document.write(perc2);
document.write("</td>");

document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write("Percentage");

document.write("</td>");
document.write("<td>");
document.write(sub3);
document.write("</td>");
document.write("<td>");
document.write(total);
document.write("</td>");
document.write("<td>");
document.write(obt3);
document.write("</td>");
document.write("<td>");
document.write(perc3);
document.write("</td>");

document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write(null);
document.write("</td>");
document.write("<td>");
document.write(ftotal);
document.write("</td>");
document.write("<td>");
document.write(totalObt);
document.write("</td>");
document.write("<td>");
document.write(percentage);
document.write("</td>");

document.write("</tr>");
document.write("</table>");
