const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
let tl = gsap.timeline();

function firstPageAnimation() {
  tl.from("nav", {
    y: -60,
    opacity: 0,
    duration: 1,
    scrub: true,
  }).from(".hero_container >h1 ", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrub: true,
  });
  tl.from("#h1", {
    y: 60,
    opacity: 0,
    duration: 1,
    scrub: true,
  });
  tl.from("#hero-container-p ", {
    y: -60,
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    // ease:'power2.inOut',
    scrub: true,
  });
  tl.from(".herofooter", {
    scale: 0.2,
    opacity: 0,
    duration: 1,
    // delay:2.5,
    scrub: true,
  });
}

function circleMouseFollower(Xscale, Yscale) {
  window.addEventListener("mousemove", function (e) {
    this.document.getElementById(
      "smallcircle"
    ).style.transform = `translate(${e.clientX}px,${e.clientY}px) scale(${Xscale},${Yscale})`;
  });
}
circleMouseFollower();
function smallcircleKoChaptakaro() {
  let Xscale = 1;
  let Yscale = 1;
  let prevScaleX = 0;
  let prevScaleY = 0;
  window.addEventListener("click", function (e) {
    Xscale = gsap.utils.clamp(0.2, 1.5, e.clientX - prevScaleX);
    Yscale = gsap.utils.clamp(0.2, 1.5, e.clientY - prevScaleY);

    prevScaleX = e.clientX;
    prevScaleY = e.clientY;
    circleMouseFollower(Xscale, Yscale);
  });
}

firstPageAnimation();
smallcircleKoChaptakaro();

document.querySelectorAll(".elem").forEach((element) => {
  let rotate = 0;
  let diffrotate = 0;
  element.addEventListener("mousemove", function (e) {
    let diff = e.clientY - element.getBoundingClientRect().top;
    //to find the rotation of the image
    diffrotate = e.clientX - rotate;
    rotate = e.clientX;

    gsap.to(element.querySelector("img"), {
      opacity: 1,
      x: e.clientX,
      y: diff / 10,
      ease: "power3",
      stagger: 0.1,
      // display:'block',
      duration: 1,
      rotate: gsap.utils.clamp(-20, 20, diffrotate * 0.2),
    });
  });
  element.addEventListener('mouseleave',function(e){
    gsap.to(element.querySelector('img'),{
        // display:'none',
        opacity:0,
        ease:'power3',
    });
});

});
