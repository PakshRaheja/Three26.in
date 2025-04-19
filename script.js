gsap.registerPlugin(ScrollTrigger);

const pages = document.querySelectorAll(".page");

pages.forEach((page, index) => {
    ScrollTrigger.create({
        trigger: page,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true
    });
});
