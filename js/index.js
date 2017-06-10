// Modularized Script.

(function(){

  // Executing the script one the DOM is fully loaded.

  $(document).ready(function() {

    $('#barraBusqueda').keypress(function(e){
          if(e.which == 13){//Enter key pressed
              $('#search').click();//Trigger search button click event
          }
      });
      // Search function
    $("#search").click(function() {
      var setItem = $("#barraBusqueda").val();//Getting the input value
      var url ="https://crossorig.in/https://en.wikipedia.org/w/api.php?action=opensearch&search=" + setItem + "&format=json&callback=?";//Setting the API url.
        $('#output').html("<div></div>");//Cleaning the output.
      $.ajax({//Getting the JSON from the API, parsed in this case.
        method: "GET",
        url: url,
        async: false,
          dataType: "jsonp",
          success: function(data) {
            for (var i in data[1]) {//For every Item in data
                $('#output').append("<div class='item'><a href=" + data[3][i] + " target='blank' >" + data[1][i] + "</a> <br>" + "<p>"+data[2][i]+"</p></div>");//Adding the item tittle as an anchor, and the description as a paragraph
                $(".item").fadeIn(200);//Shows the item with a 200 ms delay.
            }
        }
      });
    });
  });
})();
