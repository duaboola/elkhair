
    //   var cONTACTText = document.getElementById("cONTACTText");
    //   if (cONTACTText) {
    //     cONTACTText.addEventListener("click", function (e) {
    //       window.location.href = "./c-o-n-t-a-c-t.html";
    //     });
    //   }
      
    //   var fumeText = document.getElementById("fumeText");
    //   if (fumeText) {
    //     fumeText.addEventListener("click", function (e) {
    //       window.location.href = "f-u-m-e.html";
    //     });
    //   }
      
    //   var homeText = document.getElementById("homeText");
    //   if (homeText) {
    //     homeText.addEventListener("click", function (e) {
    //       window.location.href = "./landing-page2.html";
    //     });
    //   }
      
    //   var aboutText = document.getElementById("aboutText");
    //   if (aboutText) {
    //     aboutText.addEventListener("click", function (e) {
    //       window.location.href = "./about-us.html";
    //     });
    //   }
      
    //   var sERVICESText = document.getElementById("sERVICESText");
    //   if (sERVICESText) {
    //     sERVICESText.addEventListener("click", function (e) {
    //       window.location.href = "./landing-page2.html";
    //     });
    //   }
      
    //   var kyroText = document.getElementById("kyroText");
    //   if (kyroText) {
    //     kyroText.addEventListener("click", function (e) {
    //       window.location.href = "./kyro.html";
    //     });
    //   }

/* ----------- Hero -------------*/

  $(document).ready(function () {
    $(".hero-carousel").owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: ['<span class="carousel-control-prev-icon" aria-hidden="true"></span>', '<span class="carousel-control-next-icon" aria-hidden="true"></span>'],
      // responsive: {
      //   0: {
      //     items: 1,
      //   },
      //   438: {
      //     items: 1, // Adjust this breakpoint to your needs
      //   },
      //   1201: {
      //     items: 1,
      //   }
      // }
    });
  });


/* -------- Brands------------*/

// Assuming you have a reference to your content items
const contentItems = document.querySelectorAll('.content-item');

setInterval(() => {
  contentItems.forEach(item => item.classList.toggle('active'));
}, 5000); // Toggle every 20 seconds


/*--------- Testimonial -----------*/

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        autoPlay:true
    });
});


/* ------- Services -------- */
// Acc
$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(listItemHeight + "px");
	}
});


/*------------------Team -----------------*/
$(document).ready(function(){
    $(".team-carousel").owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      dots: true,
    });
  });

/* -----------------Gallery ----------------*/
$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });
  
  if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});


/* -----------Careeer ----------*/
$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});


