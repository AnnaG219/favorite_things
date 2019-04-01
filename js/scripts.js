$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var color = ($("input#color").val());
    var animal = ($("input#animal").val());
    var food = ($("input#food").val());
    var favorites = ($([color, animal, food]).val());
    var favorites2= ["green","cat","soup"];

    alert(favorites.concat(favorites2));

    //var favorites2 = ($(favorites.concat(["green","cat","soup"]).val());

    //console.log(favorites2[0]);
  //  console.log(favorites2[1]);
    //console.log(favorites2[5]);


  });
});
