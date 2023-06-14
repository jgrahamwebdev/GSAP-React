
const Navbar = () => {
    return (
        <div className="flex justify-between px-[50px] pt-[50px] text-[24px] tracking-[1px] text-[#464646] font-light uppercase" data-scroll-section>
            <div className="flex items-center font-syncopate">Menu</div>
            <div className="flex items-center">
                <img className="w-[4rem] h-auto" src="./imgs/logo.svg" alt="" />
            </div>
            <div className="flex items-center font-syncopate">Cart</div>
        </div>
    )
}

export default Navbar
