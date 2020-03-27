var senddata = {
  "Sender": "Grant",
  "To": "Node-Server",
  "Password": "NodeSender12",
  "data": []
}



  $(".pass").attr({
    "type": "password"
  });

  $(".flexer").on("click", function() {
    $(".images").css({
      "filter": "blur(8px)"
    });
  })

  $(".images").on("click", function() {
    $(".images").css({
      "filter": "blur(0px)"
    });
    $(".user").attr({
      "placeholder": "Please Enter Username"
    });
    $(".pass").attr({
      "placeholder": "Please Enter Password"
    });
  })


  $("form").on("submit", onchanges)




  function onchanges() {

    // data for the events and dates
 var tArray =[$(".user").val(),$(".pass").val()]
console.log(tArray)

    for (var i = 0; i <= 1; i++) {
      var hashes = md5(tArray[i]);
      senddata.data.push(hashes)
      // "2063c1608d6e0baf80249c42e2be5804"
      console.log(hashes  + senddata.data[i])
    }

          return false;

    grabAndPut()

  }


  var x = 0;
  var senddataString = JSON.stringify(senddata)

  function grabAndPut() {
    $.ajax({
      method: 'POST',
      url: '/people',
      data: senddataString,
      success: function() {
        console.log("has sent the data to localhost:8080/serverBox" + senddataString)
      },
      contentType: 'application/JSON'
    })
  }grabAndPut()
