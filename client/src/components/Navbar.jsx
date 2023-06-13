
const Navbar = () => {
    return (
        <div className="flex justify-between px-[50px] pt-[50px] text-[24px] tracking-[1px] text-[#464646] font-light uppercase">
            <div className="flex items-center">Menu</div>
            <div className="flex items-center">
                <img className="w-[4rem] h-auto" src="./imgs/logo.svg" alt="" />
            </div>
            <div className="flex items-center">Cart</div>
        </div>
    )
}

export default Navbar
