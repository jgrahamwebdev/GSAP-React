import About from "./About"
import Featured from "./Featured"
import Footer from "./Footer"
import Gallery from "./Gallery"
import Header from "./Header"
import Navbar from "./Navbar"

const Home = () => {
    return (
        <>
        <div className="px-[5vw]">
            <Navbar />
            <Header />
            <Featured />
            <About />
            <Gallery />
            <Footer />
        </div>
        </>
    )
}

export default Home
