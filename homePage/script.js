window.onload = function() {
  var cello = document.getElementById('cello');
  var mtg = document.getElementById('mtg');
  var book = document.getElementById('book');

  cello.style.display = "none";
  mtg.style.display = "none";
  book.style.display = "none";
};
  function showHide(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === "none") {

      element.style.display = "inline";

      if (elementId === 'cello') {
        element.style.width = "30%";
        element.style.height = "40%";


        mtg.style.display = "none";
        book.style.display = "none";


      } else if (elementId === 'mtg') {
        element.style.width = "33.3%";
        element.style.height = "80%";

        cello.style.display = "none";
        book.style.display = "none";


      } else if (elementId === 'book') {
        element.style.width = "30%";
        element.style.height = "70%";

        cello.style.display = "none";
        mtg.style.display = "none";

      }
    } else {
      element.style.display = "none";
    }
  }
