import { FaHeart } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import styles from "./Hero.module.css"
import hero from "../../assets/hero.jpg"
import pizza from "../../assets/heroPizza.jpg"
import burger from "../../assets/heroBurger.jpg"
import stars from "../../assets/stars.jpg"
import yellowA from "../../assets/yellowArrow.png"

const Hero = () => {
    return (
        <header className="flex flex-col justify-center gap-10 mt-[150px] p-3 md:flex-row md:gap-[300px]">
              <div className=''>
                <p className='font-body flex bg-gray-300 p-1 rounded-lg w-fit text-m text-center ml-4 mb-5'>
                    <FaHeart className='bg-red-500 rounded-full p-1 text-yellow-500 mr-1 w-6 h-6'/>
                    People Trust Us
                </p>
                <p className="text-[45px] font-bold font-body md:text-[70px]"> 
                    We're <span className="text-red-500">Serious</span> For<br/> <span className="text-red-500">Food</span> & <span className="text-yellow-500">Delivery</span>.
                </p>
                <p className="text-2xl font-body ">Best cooks and best delievery guys all at your service.<br/> Hot tasty food will reach you in few minutes.</p>
                <div className="flex mt-4">
                    <button className="bg-[#F54748] text-white py-3 px-6 rounded-[32px] transform hover:translate-y-[-3px] transition-all duration-300">
                        Download App
                    </button>
                    <div className="flex ml-11">
                        <button className={`${styles.shadow} transform hover:translate-y-[-3px] transition-all duration-300`}>
                            <MdPlayArrow  className="h-[35px] "/>
                        </button>
                        <p className="ml-4 mt-2 text-xl">
                            Watch Video
                        </p>
                    </div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-full overflow-hidden w-[400px] h-[400px]">
                    <img src={hero} alt="Rectangular Image" className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-3 absolute top-[70px] left-[-10px] bg-white p-2 rounded-md md:left-[-50px]">
                        <img src={pizza} alt="" className="rounded-sm h-[50px] w-[50px]"/>
                        <div>
                            <p className="text-[12px]  mt-[-2px]">Italian Pizza</p>
                            <img src={stars} alt="" className="h-11 mt-[-16px]"/>
                            <p className=" mt-[-17px]">$9.45</p>
                        </div>
                </div>
                <div className="flex gap-3 absolute bottom-[70px] right-[-5px] bg-white p-2 rounded-md md:right-[-50px]">
                        <img src={burger} alt="" className="rounded-sm h-[50px] w-[50px]"/>
                        <div>
                            <p className="text-[12px]  mt-[-2px]">Mexican Burger</p>
                            <img src={stars} alt="" className="h-11 mt-[-16px]"/>
                            <p className=" mt-[-17px]">$4.55</p>
                        </div>
                </div>
                <img src={yellowA} alt="" className="absolute top-[-110px] h-[175px] right-[-160px] rotate-[-37deg]"/>
              </div>
        </header>
    );
};

export default Hero;