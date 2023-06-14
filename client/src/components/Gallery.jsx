import { useState } from "react"

const images = [
    {
        src: 'https://unsplash.it/1000/800',
        title: 'Lorem ipsum dolor sit.',
        subtitle: 'Amet consectetur adipisicing elit.',
        category: 'Image/Category'
    },
    {
        src: 'https://unsplash.it/1001/800',
        title: 'Lorem ipsum dolor sit.',
        subtitle: 'amet consectetur adipisicing elit.',
        category: 'Image/Category'
    },
    {
        src: 'https://unsplash.it/1000/801',
        title: 'Lorem ipsum dolor sit.',
        subtitle: 'amet consectetur adipisicing elit.',
        category: 'Image/Category'
    },
    {
        src: 'https://unsplash.it/1000/802',
        title: 'Lorem ipsum dolor sit.',
        subtitle: 'amet consectetur adipisicing elit.',
        category: 'Image/Category'
    },
    {
        src: 'https://unsplash.it/1002/800',
        title: 'Lorem ipsum dolor sit.',
        subtitle: 'amet consectetur adipisicing elit.',
        category: 'Image/Category'
    },
    
]

function GalleryItem({ src, category, subtitle, title, updateActiveImage, index }) {
    return (
        // aspect-video creates slide show effect
        <div className="aspect-video h-full flex items-center justify-center flex-col w-screen">
            <div className="w-full h-full relative will-change-transform flex items-center justify-center">
                <div className="absolute left-[20%] bottom-[10%] z-10 translate-x-[-20%] text-[#dbd8d6]">
                    <h1 className="leading-[6vw] font-baiJamuree font-semibold text-[4vw]">{title}</h1>
                    <h6 className="relative leading-[6vw] font-bodoni text-white text-[4vw] stroke-black">{subtitle}</h6>
                    <p className="relative leading-[24px] font-baiJamuree font-normal mt-[10vh]">{category}</p>
                </div>
                <div className="bg-cover bg-center origin-center w-[80%] h-full will-change-transform scale-[1]" style={{ backgroundImage: `url(${src})`}}></div>
            </div>
        </div>
    )
}

const Gallery = () => {
    const [activeImage, setActiveImage] = useState(1);
    return (
        <section className="" data-scroll-section>
            <div className="h-screen py-[10vh] flex flex-nowrap bg-[#d64b3c] mx-[-5vw]">
                {/* <div className="absolute top-[10%] left-[100px] z-10 mix-blend-difference leading-[16px] bg-[#dbd8d6] font-baiJamuree font-semibold text-[16px] inline-block">
                    <span>{activeImage}</span>
                    <span className="bg-white w-[6.25vw] m-[7px 10px] inline-block"/>
                    <span>{images.length}</span>
                </div> */}

                {images.map((images, index) => (
                    <GalleryItem 
                        key={images.src} 
                        index={index} 
                        {...images} 
                        updateActiveImage={(index) => setActiveImage(index + 1)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Gallery
