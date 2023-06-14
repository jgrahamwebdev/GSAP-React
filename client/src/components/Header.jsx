
import { gsap } from "gsap";
import SplitText from "../utils/Split3.min.js";
import { useEffect } from "react";

const Header = () => {

    useEffect(() => {
        const split = new SplitText("#header-text", {
          type: "lines",
          linesClass: "lineChildren",
        });
        
        const splitParent = new SplitText("#header-text", {
          type: "lines",
          linesClass: "lineParent",
        });
    
        gsap.to(split.lines, {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        });
      }, []);

    //** Add properties for '.lineChildren' and '.lineParent' in App.css **

    return (
        <section className="relative">
            <ul className="absolute left-0 top-[100px] tracking-[1px] text-[#5f5f5f] uppercase ml-[2vw]">
                <li className="mx-[10px] mb-2 cursor-pointer font-syncopate">Intro</li>
                <li className="mx-[10px] mb-2 cursor-pointer font-syncopate">About</li>
                <li className="mx-[10px] mb-2 cursor-pointer font-syncopate">Featured</li>
            </ul>
            <h1 id="header-text" className="text-[16vw] text-[#1d1d1d] uppercase text-center font-bodoni font-semibold">Art Objects</h1>
        </section>
    )
}

export default Header
