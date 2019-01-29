

  $(document).ready(function() {
         $(".menu-toggle").on("click", function() {
                  $("#menu ul").toggleClass("showing");
          });
   });






$('.category-button').categoryFilter();



$(document).ready(function() {
 
  $("#owl").owlCarousel({
      loop: true,
      navigation : true, // Show next and prev buttons
      navText: ["<img src='img/left.png'>","<img src='img/right.png'>"],
      // autoplay:true,
      autoplayTimeout:6000,
      smartSpeed:1000,
      margin : 20,
      singleItem:true,
      items : 1,
      touchGrag: true,
      nav: true,
        responsive: {

          800:{
            nav:true
          }
        }

  
  });

 
});


  $(document).ready(function() {
  $('a[data-target^="anchor"]').bind('click.smoothscroll',function(){
      var target = $(this).attr('href');
        bl_top = $(target).offset().top;

      $('body, html').animate({scrollTop:bl_top})  
  })
  
});


// $(function(){
// alert($('#portfolio').offset());
// }); 



  
$(function() {

  var $window  = $(window);
     



  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),

        win_height_padded = $window.height() * 0.8;


    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;
          
      if (scrolled + win_height_padded > offsetTop) {

          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
 
   
          }, parseInt($this.data('timeout'),10));
    
      }
    });
  
 
  }

  revealOnScroll();
});
