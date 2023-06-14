import SectionHeader from "./SectionHeader"
import { gsap } from "gsap";
import SplitText from "../utils/Split3.min.js";
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        const split = new SplitText("#paragraph", {
          type: "lines",
        });
    
        gsap.to(split.lines, {
          duration: 1,
          y: -20,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        });
      }, []);

    //** Add properties for '.lineChildren' and '.lineParent' in App.css **

    return (
        <section className="pl-[2vw]" data-scroll-section>
            <SectionHeader title='about'/>
           <p id="paragraph" className="text-[45px] leading-[1.4] font-syncopate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit non deleniti natus sint ad soluta voluptatem quia culpa exercitationem corporis eos fugiat beatae doloribus, consequuntur esse ut repellendus officia eaque veritatis quo dignissimos dicta libero.</p>
        </section>
    )
}

export default About
