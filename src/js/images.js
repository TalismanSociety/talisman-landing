// Script goes just before </body>
// Script from https://varvy.com/pagespeed/defer-images.html
function init() {
  const imgDefer = document.getElementsByTagName("img");
  for (const i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute("data-src")) {
      imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
    }
  }
}
window.onload = init;
