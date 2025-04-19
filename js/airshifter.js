document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  const animationDuration = 2000;
  const animationWrapper = document.querySelector('.airtext');
  const homeContent = document.querySelector('.home');


  setTimeout(() => {

    animationWrapper.classList.add('hide-animation');


    setTimeout(() => {
      homeContent.style.filter = 'none';
    }, 1000);


    setTimeout(() => {
      homeContent.style.visibility = 'visible';
      homeContent.style.opacity = 1;
      // animationWrapper.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 0);
  }, animationDuration);

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

  
  gsap.defaults({ ease: "back.out", duration: 1.5 });
  gsap.from(".airtext", {
    scale: 0.5,
    opacity: 0,
    stagger: 0.7,
    y: 20,
  });

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
});

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.purifier',
    start: 'top 100%',
    end: 'bottom 0%',
    toggleActions: 'play reverse play reverse',
    scrub: true,
  }
});

tl1.fromTo('.pureimg',
  { opacity: 0, x: 20 },
  { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
)
  .fromTo('.puretext',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },

  )
  .fromTo('.spuretext',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 2, ease: 'power2.out' },

  );
  ScrollTrigger.create({
    trigger: ".purifier", // Use the content area as the trigger
    start: "top top", // Trigger start when top of the content area reaches the top of the viewport
    end: "bottom bottom", // Trigger end when bottom of the content area reaches the bottom of the viewport
    onUpdate: self => {
        const scrollPos1 = self.progress; // Get the scroll progress
        const scrollSpeed1 = 2; // Adjust this value to control the scroll speed difference

        gsap.to(".pureimg", { // Target the image
            y: -(scrollPos1 * scrollSpeed1 * 20) // Adjust the multiplier to control scroll speed
        });
    }
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.circulation',
    start: 'top 80%',
    end: 'bottom 0%',
    toggleActions: 'play reverse play reverse',
    scrub: true,
    
  }
});

tl2.fromTo('.circimg',
  { opacity: 0, x: 20 },
  { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' , delay: 0.2 }
)
  .fromTo('.circtext',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },

  )
  .fromTo('.scirctext',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 2, ease: 'power2.out' },

  );
  ScrollTrigger.create({
    trigger: ".circulation", // Use the content area as the trigger
    start: "top top", // Trigger start when top of the content area reaches the top of the viewport
    end: "bottom bottom", // Trigger end when bottom of the content area reaches the bottom of the viewport
    onUpdate: self => {
        const scrollPos1 = self.progress; // Get the scroll progress
        const scrollSpeed1 = 2; // Adjust this value to control the scroll speed difference

        gsap.to(".circimg", { // Target the image
            y: -(scrollPos1 * scrollSpeed1 * 20) // Adjust the multiplier to control scroll speed
        });
    }
});

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.lidar',
    start: 'top 80%',
    end: 'bottom 0%',
    toggleActions: 'play reverse play reverse',
    scrub: true,
  }
});

tl3.fromTo('.lidarimg',
  { opacity: 0, x: 20 },
  { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
)
  .fromTo('.lidartext',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
  )
  .fromTo('.uvctext',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },

  )
  .fromTo('.slidartext',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 2, ease: 'power2.out' },

  )
  .fromTo('.suvctext',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 10, ease: 'power2.out' },

  );
  ScrollTrigger.create({
    trigger: ".lidar", // Use the content area as the trigger
    start: "top top", // Trigger start when top of the content area reaches the top of the viewport
    end: "bottom bottom", // Trigger end when bottom of the content area reaches the bottom of the viewport
    // markers: true,
    onUpdate: self => {
        const scrollPos1 = self.progress; // Get the scroll progress
        const scrollSpeed1 = 2; // Adjust this value to control the scroll speed difference

        gsap.to(".lidarimg", { // Target the image
            y: -(scrollPos1 * scrollSpeed1 * 20) // Adjust the multiplier to control scroll speed
        });
    }
});

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.remote',
    start: 'top 80%',
    end: 'bottom 0%',
    toggleActions: 'play reverse play reverse',
    scrub: true,
  }
});

tl4.fromTo('.remoteimg',
  { opacity: 0, x: 20 },
  { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
)
  .fromTo('.remotetext',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },

  )
  .fromTo('.sremotetext',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 5, ease: 'power2.out' },

  );

  ScrollTrigger.create({
    trigger: ".remote", // Use the content area as the trigger
    start: "top top", // Trigger start when top of the content area reaches the top of the viewport
    end: "bottom bottom", // Trigger end when bottom of the content area reaches the bottom of the viewport
    onUpdate: self => {
        const scrollPos = self.progress; // Get the scroll progress
        const scrollSpeed = 2; // Adjust this value to control the scroll speed difference

        gsap.to(".remoteimg", { // Target the image
            y: -(scrollPos * scrollSpeed * 10) // Adjust the multiplier to control scroll speed
        });
    }
});


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