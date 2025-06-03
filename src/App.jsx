import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";


function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 70,
      duration: 1.4,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 20,
      duration: 2.4,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "60% 60%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });

     // Animate Rockstar logo: bottom-left → bottom-center
   gsap.to(".rock-logo", 
    {
      left: "50%", 
      scale: 1.7,
      x: "-50%", 
      filter: "blur(2px)",
      duration: 4.8,
      ease: "expo.out"
    });

 

  });



useGSAP(() => {
  if(!showContent) return;

  gsap.to(".main", {
    scale: 1,
    rotate: 0,
    duration: 2,
    delay: "-1",
    ease: "Expo.easeInOut",
  });

  gsap.to(".sky", {
    scale: 1.2,
    rotate: 0,
    duration: 2,
    delay: "-.8",
    ease: "Expo.easeInOut",
  });

  gsap.to(".BG", {
    scale: 1.2,
    rotate: 0,
    duration: 2,
    delay: "-.8",
    ease: "Expo.easeInOut",
  });

  gsap.to(".character", {
    bottom: "80%",       // Center vertically
    translateY: "100%",
    x: "0%",  // Align center
    duration: 4,
    ease: "power4.out",
  });

   gsap.to(".logo1", {
    bottom: "30%", // Move to horizontal center
  transform: "translate(-50%, -50%)",
  duration: 2,
  ease: "power3.out",
  onComplete: () => {
    const el = document.querySelector(".logo1");
    el.style.bottom = "30%";
    el.style.transform = "translate(-50%, -50%)";
    el.style.transition = "none";
  },
  });

  gsap.to(".helipad", {
    top: "20%",
    y: "-50%",
    duration: 2,
    ease: "power4.out",
    position: "absolute",
  });

  gsap.to(".logo18", {
    bottom: "32%",
    x: "150%",
    y: "0%",
    duration: 4,
    ease: "power4.out",
  });

   gsap.to(".logo2", {
  y: "-=20", // Move up
  duration: 1.4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  }); 

  gsap.to(".logo2", {
  top: "35%",
  transform: "translate(-50%, -50%)", // center it perfectly
  duration: 1.5,
  ease: "power3.out",
  onComplete: () => {
    const el = document.querySelector(".logo2");

    // Clean up inline styles so position is permanent
    el.style.top = "35%";
    el.style.transform = "translate(-50%, -50%)";
    el.style.transition = "none";
  }
  });  

  gsap.to(".rock", {
    left: "90%",       // Move to the right
    x: "-50%",         // Slight adjustment to keep anchor centered
    duration: 4,
    ease: "power3.out",
  });

   gsap.to(".rimg", {
   opacity: 1,
   scale: 1,
   duration: 2,
   delay: 0.5,
   ease: "Expo.easeOut",
  });

  gsap.to(".rimg", {
  y: "-=20", // Move up
  duration: 1.2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  });

  const main = document.querySelector(".main");

  main?.addEventListener("mousemove", function(e){
    const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
    gsap.to(".main .text", {
      x: `${xMove * 0.4}%`,
    });

    gsap.to(".sky", {
      x: `${xMove * 0.4}%`,
    });

    gsap.to(".BG", {
      x: `${xMove * 0.4}%`,
    });

    gsap.to(".BG2", {
      x: `${xMove * 0.4}%`,
    });

    gsap.to(".rimg", {
      x: `${xMove * 0.3}%`,
    });

    gsap.to(".rimg", {
      x: `${xMove * 0.3}%`,
    });

  });
}, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <img
          src="./rock.png"
          alt="Rockstar Logo"
          className="rock-logo absolute left-[5%] bottom-[5%] w-[60px]"
        />
        
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            className="skl"
            href="\sky.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-25deg] scal-[1.7]">

          {/*First Landing page */}

          <div className="landing w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-10 w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[6px]">
                  <div className="line w-25 h-2 bg-white"></div>
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-10 h-2 bg-white"></div>
                </div>
                <h3 className="text-5xl -mt-[13px] leading-none text-white">Rockstar</h3>
              </div>
            </div>
            
            {/*Image Section */}

            <div className="imagesdiv overflow-hidden relative items-center w-full h-screen">
              <img className="absolute sky scale-[1.4] rotate-[-20deg] top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="" />
              <img className="absolute BG scale-[1.4] rotate-[-5deg] top-0 left-0 w-full h-full object-cover" src="./BG (2).png" alt="" />
              <img className="absolute logo2 w-150 h-150 -top-70 left-1/2 -tranlate-x-1/2 -translate-y-1/2 scale-[1.4]" src="./logo2.png" alt="" />
              <img className="absolute helipad top-[-500px] right-1/2 -tranlate-x-1/2 w-80 h-80 " src="./helipad.png" alt="" />
              <img className="absolute logo1 w-100 h-100 -bottom-10 left-1/2 -tranlate-x-1/2 scale-[1.4] " src="./logo1.png" alt="" />
              <img className="absolute character bottom-[-100%] left-1/2 -translate-x-1/2 w-140" src="./character.png" alt="" />
              <img className="logo18 absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-30 h-30" src="./18+.png" alt="" />
            </div>

            {/*Bottom Bar */}
            
            <div className="btmbar absolute text-white bottom-229 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-2 items-center">
              <i className="text-4xl ri-arrow-down-line"></i>
              <h3 className="text-2xl font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]" src="./ps5.png" alt="" />
              <img className="rock absolute bottom-10 py-2 px-2 top-7 left-1/2 w-30 h-30" src="./rock.png" alt="" />
            </div>
          </div>

          {/*Second Landing Page*/}

          <div className="w-full h-screen px-10 flex flex-col items-center justify-center overflow-hidden bg-black">
            <div className="imagediv2 relative scale-[1.3] w-full h-screen">
               <img className="absolute BG2 top-0 left-0 w-full h-full object-cover" src="./BG2.png" alt="" />
              <div className="absolute top-70 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1470px] h-[1060px] rounded-2xl overflow-hidden shadow-xl z-50">
              {/* Blurred Left Side */}
              <div className="absolute top-0 left-0 w-1/2 h-full bg-white/10 backdrop-blur-md z-0"></div>

              {/* Content */}
              <div className="relative z-10 flex h-full">
                <img className="absolute w-100 h-100 left-80 top-140 "src="./vc.png" alt="" />
                <img className="absolute h-90 left-10 top-176 "src="./char.png" alt="" />
                {/* Text Section (Left Side, aligned left) */}
                <div className="w-1/2 px-10 py-6 text-left text-white flex flex-col justify-center">
                  <h2 className="text-2xl font-bold font-[Helvetica_Now_Display] mb-2 tracking-wide">
                    Welcome to Vice City
                  </h2>
                  <p className="text-sm font-[Helvetica_Now_Display] text-white/80 mb-2">
                    Explore the streets, live the thrill. GTA VI delivers a bold new chapter in open-world chaos.
                  </p>
                  <p className="text-sm font-[Helvetica_Now_Display] text-white/80">
                    Vice City is back — bigger, bolder, and more dangerous than ever. Step into a world of neon-lit streets, high-speed pursuits,
                    and underground empires. GTA VI brings a dynamic open world filled with rich storytelling, iconic characters, and jaw-dropping visuals.
                  </p>
                </div>

                {/* Image Section (Right Side, clean) */}
                <div className="rimg w-1/2 relative">
                    <img
                      className="absolute top-130 left-1/2 w-100 -translate-x-1/2 -translate-y-1/2 object-cover"
                      src="./logo.png"
                      alt=""
                    />
                    <img
                      className="absolute scale-[.65] top-195 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      src="./charc.png"
                      alt=""
                    />
                 </div>
                </div>
              </div>
            </div>        
          </div>
        </div>
      )}
    </>
  );
}

export default App;