//Q1
var emp=[];
//Q2
var empt={};
//Q3
var arr=[true,false];
//Q1
 var arr=["apple","mango","grapes"];
//Q2
var arrn=[1,2,3,4,5];
//Q3
 var education=["1) SSC","2) HSC", "3) BCS","3) BS","4) N.COM ","5) MS","6) MPHIL"];
 for(i=0; i<education.length; i++){
    document.write(education[i]);
    document.write("<br>");
 }
//Q3
var std=["red","white","black"];
document.write(std);
var newClr=prompt("which color do you want to add");
std.push(newClr);
document.write(std);
var endClr=prompt("which color do you want to add");

std.pop(endClr);
document.write(std);

std.push("purple");
std.push("pink");
document.write(std);



std.shift();
document.write(std);
std.pop();
document.write(std);

//Q4

var stdMarks=[340,568,789,200,100];
stdMarks.sort();
document.write(stdMarks);
//Q5

var cities=["Karachi","Lahore","Quettea","Peshawar"];
var selected = cities.slice(2,4);
document.write(selected);

//Q6

var arr = ["This",  "is" ,  "my" ,  "cat"];
document.write(arr.join());


//Q7

var phone=["Apple","samsung","Nokia","sony","haier"];

document.write("<select>");
document.write("<option>"+phone[0] +"</option>");
document.write("<option>"+phone[1] +"</option>");
document.write("<option>"+phone[2] +"</option>");
document.write("<option>"+phone[3] +"</option>");
document.write("<option>"+phone[4] +"</option>");


document.write("</select>"); 

//Q8

var com=["mouse","pointer","keyboard","cpu"];
for(i=0; i<com.length; i++){
        document.write("Out:"+"<br>"+com[i]);
       document.write("<br>");
     }
//Q9
var com=["mouse","pointer","keyboard","cpu"];
com.reverse();
for(i=0; i<com.length; i++){
        document.write("Out:"+ "<br>" + com[i]);
       document.write("<br>");
     }
//Q10
var std=["nisa","hina","iqra"];
var marks=[400,380,390];
var perc1= marks[0]/500*100;
var perc2= marks[1]/500*100;
var perc3= marks[2]/500*100;

document.write("score of nisa is "+ marks[0]+perc1);
document.write("score of hina is "+ marks[1]+perc2);
document.write("score of iqra is "+ marks[2]+perc3);

