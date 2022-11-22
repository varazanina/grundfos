var text = ["Velkommen", "Welcome"];
    var counter = 0;
    var elem = document.getElementById("greeting");
    setInterval(change, 3000);
    function change() {
     elem.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; }
    } 
var text2 = ["til Grundfos Kollegiet", "to Grundfos Kollegiet"];
    var counter2 = 0;
    var elem2 = document.getElementById("where");
    setInterval(change2, 3000);
    function change2() {
     elem2.innerHTML = text2[counter2];
        counter2++;
        if(counter2 >= text2.length) { counter2 = 0; }
    } 


   /* var text = ["Velkommen"];
    var counter = 0;
    var elem = $("#greeting");
    setInterval(change, 3000);
    function change() {
        elem.fadeOut(function(){
            elem.html(text[counter]);
            counter++;
            if(counter >= text.length) { counter = 0; }
            elem.fadeIn();
        });
    }

function change() {
   // Fade out
   $("#greeting").fadeOut(100, function() {
      // Increment the counter
      counter++;
      if(counter >= text.length) { counter = 0; }
      // Update the text and fade in
      $("#greeting").text(text[counter]).fadeIn(100);
   })
}*/