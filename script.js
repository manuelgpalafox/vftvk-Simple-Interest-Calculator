function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <strong> "+principal+" </strong> <br> at an interest rate of <strong> "+rate+"% </strong> <br> You will receive an amount of <strong>"+interest+"</strong> <br>in the year <strong> "+year+" </strong> <br>"
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function checkdata(){
    //Create references to the input elements we wish to validate
    var principal_number = document.getElementById("principal");

    //Check if username field is empty
    if(principal_number.value == 0){
          alert("Please enter a positive number");
          principal_number.focus();
          return false;
    }

    if(principal_number.value < 0){
        alert("Please enter a positive number");
        principal_number.focus();
        return false;
  }
}