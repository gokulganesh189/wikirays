const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

gsap.to(".wiki-intro span",{ y: "0%", duration:1,delay:1});
gsap.to(".wiki-rays",{ y:"-100%", duration:1,delay:3});
gsap.to(".section", { y: "-96%", duration:1,delay:3.5});
// gsap.to(".section", { y: "-100px", duration:1,delay:4});
