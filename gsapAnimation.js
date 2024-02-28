const timeline = gsap.timeline();

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 550) {
    timeline.from(".logo", { opacity: 0, y: -100 });
    timeline.from("ul li", { opacity: 0, y: -100, stagger: 0.1 });
    timeline.from(".cart_container", { opacity: 0 });
    timeline.from(".product-image", { opacity: 0 });
    timeline.from(".product-thumbnails1 > img", {
      opacity: 0,
      y: -100,
      stagger: 0.1,
    });
    timeline.from(".product-details", { opacity: 0 });
  } else {
    timeline.from(".logo", { opacity: 0, y: -100 });
    timeline.from(".cart_container", { opacity: 0, y: -100 });
    timeline.from(".product-image-container", { opacity: 0, x: -100 });
    timeline.from(".product-showcase", { opacity: 0, x: 100 });
  }
});
