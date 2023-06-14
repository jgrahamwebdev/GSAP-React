import SectionHeader from "./SectionHeader"
import { gsap } from "gsap";
import SplitText from "../utils/Split3.min.js";
import { useEffect } from "react";

const Footer = () => {

    useEffect(() => {
        const split = new SplitText("#footer-text", {
          type: "lines",
          linesClass: "lineChildren",
        });
        
        const splitParent = new SplitText("#footer-text", {
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
        <section className="text-center" data-scroll-section>
            <SectionHeader title='Made by '/>
            <h1 id="footer-text" className="text-[16.1vw] uppercase font-bodoni">JGWEBDEV</h1>
        </section>
    )
}

export default Footer
