function mobileView(x) {
    if (x.matches) { // If media query matches
      document.querySelectorAll(".img-feat-bottom")[0].setAttribute("src", "images/mobile/image-graphic-design.jpg");
      document.querySelectorAll(".img-feat-bottom")[1].setAttribute("src", "images/mobile/image-photography.jpg");
        // Gallery Image 
      document.querySelectorAll(".gal-img")[0].setAttribute("src", "images/mobile/image-gallery-milkbottles.jpg");
      document.querySelectorAll(".gal-img")[1].setAttribute("src", "images/mobile/image-gallery-orange.jpg");

      document.querySelectorAll(".gal-img")[2].setAttribute("src", "images/mobile/image-gallery-cone.jpg");

      document.querySelectorAll(".gal-img")[3].setAttribute("src", "images/mobile/image-gallery-sugar-cubes.jpg");

    }
  }
  
  var x = window.matchMedia("(max-width: 420px)")
  mobileView(x) // Call listener function at run time
  x.addListener(mobileView) // Attach listener function on state changes