export default function (){
  
  $( document ).ready(function(){
    if($('.headerSticky').length > 0 ){

      // Get the header
      var header = $("#header");
      var bodyElement = $("#main-content");
      var headerHeight = $("#header").outerHeight();
      var topBar = $(".top-bar").outerHeight();

      // When the user scrolls the page, execute myFunction
      $(window).on('scroll', myFunction);

      // Get the offset position of the navbar
      var offsetpos = header.offset();
      var sticky = offsetpos.top;

      // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
      function myFunction() {
        var respWidth = window.innerWidth;

        if (window.pageYOffset > sticky) {
          header.addClass("sticky");
          bodyElement.css("padding-top", (headerHeight) + "px");
        } else {
          header.removeClass("sticky");
          bodyElement.css("padding-top", 0);
        }
      }

    }
  });

}
