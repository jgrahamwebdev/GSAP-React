import { useEffect, useRef, useState } from "react"
import About from "./About"
import Featured from "./Featured"
import Footer from "./Footer"
// import Gallery from "./Gallery"
import Header from "./Header"
import Navbar from "./Navbar"
import useLocoScroll from "../hooks/useLocoScroll"

const Home = () => {
    const [preloader, setPreloader] = useState(true);

    useLocoScroll(!preloader);

    const [timer, setTimer] = useState(3);
    const id = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false);
    };

    // Will run when we mount the component
    useEffect(() => {
        console.log("set timer");
        setTimeout(() => {
            setPreloader(false);
            console.log("set timer");
        }, 3000);

        clearTimeout();
    }, []);

    // Will run when the timer changes
    useEffect(() => {
        if(timer === 0) {
            clear();
        }
    }, [timer])

    return (
        <>
        {preloader ? (
            <div className="flex items-center justify-center flex-col bg-[#191919] text-[#dbd8d6] fixed top-0 left-0 right-0 bottom-0 z-10">
                <img className="w-[6rem] h-auto animate-bounce" src="./imgs/loader.svg" alt="" />
                <h2 className="text-[1.8vw] uppercase font-bodoni font-light mt-2">JGWEBDEV</h2>
            </div>
        ) : (
        <div className="bg-slate-200 w-full h-full" data-scroll-container id="main-container">
            <Navbar />
            <Header />
            <Featured />
            <About />
            {/* <Gallery /> */}
            <Footer />
        </div>
        )}
        </>
    )
}

export default Home
