document.addEventListener("DOMContentLoaded", (event) => {

  
    // gsap.registerPlugin(ScrollToPlugin);

    // const sections = document.querySelectorAll('div[data-section]');
    // let isScrolling = false;

    // window.addEventListener("wheel", (event) => {
    //   if (isScrolling) return;
    //   isScrolling = true;

    //   let currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2).closest('div[data-section]');
    //   let currentIndex = Array.from(sections).indexOf(currentSection);
    //   let nextIndex = event.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;

    //   if (nextIndex >= 0 && nextIndex < sections.length) {
    //     gsap.to(window, {
    //       duration: 1,
    //       ease: "power1.inOut",
    //       scrollTo: {
    //         y: sections[nextIndex],
    //         autoKill: false
    //       },
    //       onComplete: () => {
    //         isScrolling = false;
    //       }
    //     });
    //   } else {
    //     isScrolling = false;
    //   }
    // });
    
  const toggleElement = document.querySelector('.navbar')

    toggleElement.addEventListener('click', () => {
      toggleElement.classList.toggle('active')
    })

  const homevideo = document.querySelector(".homeVideo")
  setTimeout(() => {
    homevideo.play();
  }, 7000);


  const animationDuration = 4000;
  const animationWrapper = document.querySelector('.animation-wrapper');
  const homeContent = document.querySelector('.home');


  setTimeout(() => {

    animationWrapper.classList.add('hide-animation');


    setTimeout(() => {
      homeContent.style.filter = 'none';
    }, 1000);


    setTimeout(() => {
      homeContent.style.visibility = 'visible';
      homeContent.style.opacity = 1;
      animationWrapper.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 0);
  }, animationDuration);


  gsap.registerPlugin(ScrollTrigger)

  let lastScrollTop = 0;
  const header = document.querySelector('header');

  // Create a ScrollTrigger instance to track scrolling
  ScrollTrigger.create({
    onUpdate: self => {
      let scrollTop = self.scroll();

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        gsap.to(header, { y: '-100%', duration: 0.3, ease: 'power2.out' });
      } else {
        // Scrolling up
        gsap.to(header, { y: '0%', duration: 0.3, ease: 'power2.out' });
      }

      lastScrollTop = scrollTop;
    }
  });

  gsap.defaults({ ease: "none", duration: 2 });
  gsap.from(".text", {
    scale: 1,
    opacity: 0,
    duration: 2,
    stagger: 0.7,
  });


  // get video element
  const video = document.getElementById("myVideo");
  const container = document.getElementById("videoContainer");

  // set the container height according to video length
  video.addEventListener('loadedmetadata', function () {
    const speed = 250; // can be any number (adjust to your preference)
    container.style.height = (video.duration * speed) + 'px';
  });

  // play video using scroll values
  // function is attached to scroll event.

  const playVideo = () => {
    // get current scroll progress
    var scrollY = window.scrollY;
    // get total page height and calculate percentage
    var height = document.documentElement.scrollHeight - window.innerHeight;
    var percentage = (scrollY / height);
    // set video playback position.
    video.currentTime = video.duration * percentage;
    window.requestAnimationFrame(playVideo);
  };

  window.addEventListener("scroll", playVideo);

  const pages = document.querySelectorAll('div[data-page="page"]');

  pages.forEach((page, index) => {
    ScrollTrigger.create({
      trigger: page,
      start: "top top",
      end: (index === pages.length - 1) ? "bottom bottom" : "bottom top-=30%",
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    });
  });

  const hoverBoxes = document.querySelectorAll('.hover-box');

            hoverBoxes.forEach(box => {
                const video = box.querySelector('.hover-box-video');

                box.addEventListener('mouseenter', () => {
                    video.play();
                });

                box.addEventListener('mouseleave', () => {
                    video.pause();
                    video.currentTime = 0; // Reset video to the start
                });
            });

  gsap.to(".image-container img", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    delay: 1,
    scrollTrigger: {
      trigger: ".bigpic2",
      start: "top 40%", // Adjust this to control when the animation starts
      end: "top top",   // Adjust this to control when the animation ends
      scrub: 1,          // Smooth the animation to follow the scroll
      // markers: true,
    }
  });
  gsap.to(".text-line", {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 2, // Delay to sync with images
    markers: true,
    scrollTrigger: {
      trigger: ".image-container",
      start: "top 60%", // Start the animation later
      end: "top 10%",   // End the animation earlier
      scrub: 1          // Smooth the animation to follow the scroll
    }
  });


  ScrollTrigger.create({
    trigger: '.product1',
    start: "top-=10% top",
    end: "bottom 80%",
    pin: true,
    pinSpacing: false,
    scrub: true,
    // markers: true,
  });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.airshifter',
      start: 'top 80%',
      end: 'bottom 0%',
      toggleActions: 'play reverse play reverse',
      scrub: true,
    }
  });

  tl.fromTo('.airtext',
    { opacity: 0, x: 20 },
    { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
  )
    .fromTo('.airshifterimg',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '+=0.2'
    )
    .fromTo('.button',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 4, ease: 'power2.out' },
      '+=0.2'
    );

  gsap.to(".goal", {
    scrollTrigger: {
      trigger: '.goal',
      start: "top-=100% center",
      end: "bottom center",
      scrub: true,
      // markers: true,

    },
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    y: 0,
    duration: 2,
    ease: 'back.out',
  })

  observer.observe(textElement);

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
});