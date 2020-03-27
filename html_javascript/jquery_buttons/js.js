var buttons = document.getElementById('buttons')
// buttons is the div where all these  buttons will be created

function createBut(){
var buttonOne = document.createElement("button");
  buttonOne.setAttribute("id","btnOne");
    buttons.appendChild(buttonOne)
buttonOne.innerText = "rotation"

  var buttonTwo = document.createElement("button");
      buttonTwo.setAttribute("id","btnTwo");
        buttons.appendChild(buttonTwo)
buttonTwo.innerText = "up and down"


        var buttonThree = document.createElement("button");
          buttonThree.setAttribute("id","btnThree");
            buttons.appendChild(buttonThree)
buttonThree.innerText = "in and out"


            var buttonFour = document.createElement("button");
              buttonFour.setAttribute("id","btnFour");
                buttons.appendChild(buttonFour)
buttonFour.innerText = "erase all content"


}
createBut()
var x = 0;
var y = 0;
var z = 0;

// will rotate the button
$("#btnOne").click(buttonOnes)

function buttonOnes(){
    var time = setTimeout(buttonOnes,25);

if (x == 121){clearTimeout(time);}

if (x == 121){x=0}
        $("#btnOne").css({"transform": "rotate(" + x + "deg)" });
if (x <= 121){x++}
console.log(x)
}











// will skew the button
$("#btnTwo").click(buttonTwos)

function buttonTwos(){
    var time = setTimeout(buttonTwos,25);

      if (y == 61){clearTimeout(time);}

          if (y == 61){y=0}
            $("#btnTwo").css({"transform": "skewY(" + y + "deg)" });
              if (y <= 61){y++}
console.log(y)
}


// will pop in and out for a button
$("#btnThree").click(buttonThrees)

function buttonThrees(){
    var time = setTimeout(buttonThrees,15);

        if (z == 3){clearTimeout(time); z=0;}
        $("#btnThree").hide("#btnThree").delay(1);
        $("#btnThree").show("#btnThree").delay(1);
z++;
console.log(z);
}




var t = 0;
// will delete the objects for a short amount of time, not delete but hide
$("#btnFour").click(buttonFours)
// to delete first replace .hide to .remove and the data will be gone for ever
function buttonFours(){
    var st = setTimeout(buttonFours,1000)
      $("body").css("background-color", "white");
      $(document.body).hide();
          console.log("no error");

          if (t >= 2){$("body").css("background-color", "blue");
            $(document.body).show();
}
              if (t <= 2){t++ }else{ clearTimeout(st); t=0;}
console.log(t)
}



var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
            this.responseText;
       }
    };
    xhttp.open("GET", "", true);
    xhttp.send(null);
