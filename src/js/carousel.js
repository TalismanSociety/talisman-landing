var glide = new Glide(".glide");

// TODO: Hide left/right accordingly
glide.on("mount.after", function (e) {
  const leftArrow = document.getElementById("glide__arrow--left");
  leftArrow.setAttribute("visibility", "hidden");
  console.log(`???mount.after`, leftArrow);
});

glide.mount();
