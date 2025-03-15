import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(scrollRef.current, {
        x: () => -(scrollRef.current.scrollWidth - window.innerWidth),
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollRef.current.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-gray-900">
      <div ref={scrollRef} className="flex w-max h-screen">
        <section className="panel w-screen h-screen flex items-center justify-center bg-blue-600 text-white text-6xl font-bold shadow-lg">
          Section 1
        </section>
        <section className="panel w-screen h-screen flex items-center justify-center bg-red-600 text-white text-6xl font-bold shadow-lg">
          Section 2
        </section>
        <section className="panel w-screen h-screen flex items-center justify-center bg-green-600 text-white text-6xl font-bold shadow-lg">
          Section 3
        </section>
        <section className="panel w-screen h-screen flex items-center justify-center bg-yellow-600 text-gray-900 text-6xl font-bold shadow-lg">
          Section 4
        </section>
      </div>
    </div>
  );
};

export default HorizontalScroll;
