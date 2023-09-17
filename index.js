var perPerson= document.getElementById("perPerson");
var totalAmount= document.getElementById("totalAmount");


function reset() {
    amount = document.getElementById("amount");
    people = document.getElementById("people");
    custom = document.getElementById("t6");

    amount.value="";
    people.value="";
    custom.value="";

    document.getElementById("amount").placeholder ="0";
    document.getElementById("people").placeholder = "0";
    document.getElementById("t6").placeholder ="Custom";
    perPerson.innerHTML ="$0.00";
    totalAmount.innerHTML = "$0.00";
    document.getElementById("button").dislable="true";
}

function validate(){
   var amount = document.getElementById("amount").value;
   var people = document.getElementById("people").value;
   
   if(amount == "" || amount < 0)
   {
    document.getElementById("err1").style.visibility="visible";

    setTimeout(() => { 
        document.getElementById("err1").style.visibilty="hidden";
        document.getElementById("amount").style.border="1px solid red"
        
    },500);
    return false;
   }
   else if(people == "" || people < 0)
   {
    document.getElementById("err2").style.visibility="visible";

    setTimeout(() => { 
        document.getElementById("err2").style.visibilty="hidden";
        document.getElementById("people").style.border="1px solid red"
        
    },500);
    return false;
   }
   else {
    return true;
   }

}

function t1(){
  var amount = document.getElementById("amount").value;
  var people = document.getElementById("people").value;
  var tipPercentage= 0.05;

  if(validate() == true){
    tips = (amount * tipPercentage)/people;
    var tipsRound = tips.toFixed(2);
    total = (amount/people) +tips;
    var totalRound = total.toFixed(2);
    perPerson.innerHTML = `${tipsRound}`;
    totalAmount.innerHTML = `${totalRound}`;
    document.getElementsById("button").removeAttribute("disable");
  }
  else {
    return false
}

}
function t2(){
    var amount = document.getElementById("amount").value;
    var people = document.getElementById("people").value;
    var tipPercentage= 0.10;
    if(validate() == true){
        tips = (amount * tipPercentage)/people;
        total = (amount/people) +tips;
        var tipsRound = tips.toFixed(2);
        var totalRound = total.toFixed(2);
        perPerson.innerHTML = `${tipsRound}`;
        totalAmount.innerHTML = `${totalRound}`;
        document.getElementsById("button").removeAttribute("disable");
    }
    else {
        return false
    }
  
  }
  function t3(){
    var amount = document.getElementById("amount").value;
    var people = document.getElementById("people").value;
    var tipPercentage= 0.15;
    if(validate() == true){
        tips = (amount * tipPercentage)/people;
        total = (amount/people) +tips;
        var tipsRound = tips.toFixed(2);
        var totalRound = total.toFixed(2);
        perPerson.innerHTML = `${tipsRound}`;
        totalAmount.innerHTML = `${totalRound}`;
        document.getElementsById("button").removeAttribute("disable");
    }
    else {
        return false
    }
  
  }
  function t4(){
    var amount = document.getElementById("amount").value;
    var people = document.getElementById("people").value;
    var tipPercentage= 0.25;

    if(validate() == true){
        tips = (amount * tipPercentage)/people;
        total = (amount/people) +tips;
        var tipsRound = tips.toFixed(2);
        var totalRound = total.toFixed(2);
        perPerson.innerHTML = `${tipsRound}`;
        totalAmount.innerHTML = `${totalRound}`;
        document.getElementsById("button").removeAttribute("disable");
    }
    else {
        return false
    }
  
  }
  function t5(){
    var amount = document.getElementById("amount").value;
    var people = document.getElementById("people").value;
    var tipPercentage= "0.50";
    if(validate()){
        tips = (amount * tipPercentage)/people;
        total = (amount /people )+tips;
        var tipsRound = tips.toFixed(2);
        var totalRound = total.toFixed(2);
        perPerson.innerHTML = `${tipsRound}`;
        totalAmount.innerHTML = `${totalRound}`;
        document.getElementsById("button").removeAttribute("disable");
    }
    else {
        return false
    }
  
  }

  function t6(){
    var amount = document.getElementById("amount").value;
    var person = document.getElementById("people").value;
    var customPercentage = document.getElementById("t6").value;
    var tipPercentage = customPercentage/100;

    console.log(amount, person,customPercentage,tipPercentage);


    if(validate()){
        tips = (amount * tipPercentage)/person;
        total = (amount /person )+tips;
        var tipsRound = tips.toFixed(2);
        var totalRound = total.toFixed(2);
        perPerson.innerHTML = `${tipsRound}`;
        totalAmount.innerHTML = `${totalRound}`;
        document.getElementById("button").removeAttribute("disable");
    }
    else {
        return false;
    }




}