var head1 = document.querySelector(".head1");
var head2 = document.querySelector(".head2");
$(function(){
    var partLeftPos = 0;
    var partRightPos = 0;
    
    $(window).scroll(function(event) {
      var distance = $(this).scrollTop() *2;
      var left = partLeftPos - distance;
      var right = partRightPos - distance;
      
      $('.left').css('left', left + "px");
      $('.right').css('right', right + "px");

      head2.style.display = "grid";


      head1.style.top = "20%";
      head2.style.top = "24%";
      closeNav();
    }); 
  })


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  