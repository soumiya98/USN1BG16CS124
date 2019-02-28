//challenge 1
/*
var markmass=60;
var johnmass=50;
var markh=5.6;
var johnh=5.2;
var bmim=markmass/(markh*markh);
var bmij=johnmass/(johnh*johnh);
var bool=bmim>bmij;
console.log(bmim);
console.log(bmij);
console.log(bool);
if(bool)
{
    console.log("mark bmi is greater")
}
else{
    console.log("john bmi is greater")
}




//DOM

document.getElementById('btn').onmouseover=function(){
    this.style.background="blue";
   

    
}
document.getElementById('btn').onmouseout=function(){
    this.style.background="grey";
   

    
}
document.getElementById("hid").onmouseover = function() {mouseOver()};

function mouseOver() {
    document.getElementById("hid").style.color = "red";
  }





//decision making
/*var age=18;
if(age<13){
    console.log("minor");
}else if(age>=18){
    console.log("major");
}
//condition?true:false
age>=18?console.log("major"): console.log("minor");*/


//Function
/*
function sou(firstname,lastname){
    console.log(firstname+' '+lastname);
}
sou('Soumiya','Rao');


//array
var names=['Soumiya','Rao','T'];
console.log(names[2]);
console.log(names);
console.log(names.length);

names.push("Keer");
names.unshift("Teju");
names.pop();
console.log(names);

*/
//challenge 2

var bill=[124,48,268];
//var bill2=48;
//var bill3=268;
console.log(bill);


function tip(num){
    var tip=0;
    if(num<50){
        tip=(20/100)*num;
        console.log(tip);
    }else if(num<200 && num>50){
        tip=(15/100)*num;
        console.log(tip);
    }else if(num>200){
        tip=(10/100)*num;
        console.log(tip);
    }
    return tip;
    

}
var i;
var tips=new Array(3);
var finalamt=new Array(3);
for(i=0;i<bill.length;i++)
{
    var tipreturn=tip(bill[i]);
    tips[i]=tipreturn;
    finalamt[i]=tipreturn+bill[i];

}



console.log(tips);

console.log(finalamt);


/*

//objects


var mydetails={
    firstname:'Soumiya',
    lastname:'Rao',
    dob:1998,
    family:['sou','sud'],
        calcAge: function(birthyear){
            return 2019-birthyear;
        }
    
};
console.log(mydetails.firstname);
var z='dob';
console.log(mydetails[z]);

mydetails.dob=1999;
console.log(mydetails);

//new object

var obj=new Object();
obj.firstname='sou';
console.log(obj);

console.log('Soumiya is ' + mydetails.calcAge(1998) + ' years old');
*/















