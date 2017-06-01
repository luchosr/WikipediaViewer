console.log("funciona");
$(document).ready(function() {
  $('#barraBusqueda').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#search').click();//Trigger search button click event
        }
    });
  $("#search").click(function() {

    var setItem = $("#barraBusqueda").val();
    console.log(setItem);
    var url ="https://crossorig.in/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + setItem + "&format=json&callback=?";
    console.log(url);
      $('#output').html("<div></div>");
    $.ajax({
      method: "GET",
      url: url,
      async: false,
        dataType: "jsonp",
        success: function(data) {
          for (var i in data[1]) {

              $('#output').append("<div class='item'><a href=" + data[3][i] + " target='blank' >" + data[1][i] + "</a> <br>" + "<p>"+data[2][i]+"</p></div>");
              $(".item").fadeIn(200);

          }
         console.log(data[1]);
         console.log(data[2]);
         console.log(data[3]);
        //console.log(data);
      }
    });
  });


});
