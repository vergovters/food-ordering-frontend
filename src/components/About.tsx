import chef from "../assets/chef.jpg"
import { MdBookOnline } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";
import { MdMoreTime } from "react-icons/md";
import { MdOutlinePriceCheck } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import redArrow from "../assets/redArrow.png"

const About = () => {
    return (
        <div className="flex flex-col md:flex-row md:mt-[300px] md:gap-[200px]" >
            <div className="relative">
                <img src={redArrow} alt="" className="absolute w-[500px] top-[-100px] left-[300px] hidden md:block"/>
                <div className="rounded-full m-[-25px] overflow-hidden w-[400px] h-[400px] z-10 md:m-0">
                    <img src={chef} alt="Rectangular Image" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="mt-[40px]">
                <p className="text-[60px] font-body">
                    We are <span className="text-yellow-500">more</span> than<br/> 
                    <span  className="text-red-500">multiple</span> service
                </p>
                <p className="font-body text-[20px]">
                    This is a type of resturent which typically serves food and drink,
                    in addition to light refreshments such as baked goods or snacks. 
                    The term comes frome the rench word meaning food
                </p>
                <div className="flex font-body text-[18px] ml-8 gap-11">
                    <ul>
                        <li className="flex mt-[30px]">
                            <MdBookOnline className="mr-2"/>  Online Order
                        </li>
                        <li className="flex mt-[30px]">
                            <MdOutlineDateRange className="mr-2" />  Pre-Reservetion
                        </li>
                        <li className="flex mt-[30px]">
                            <SiTrustpilot className="mr-2"/>  Only Trusted Places
                        </li>
                    </ul>
                    <ul>
                    <li className="flex mt-[30px]">
                            <Ri24HoursLine className="mr-2"/>  24/7 Service
                        </li>
                        <li className="flex mt-[30px]">
                            <MdMoreTime className="mr-2"/>  Fast Delievery
                        </li>
                        <li className="flex mt-[30px]">
                            <MdOutlinePriceCheck className="mr-2"/>  Best Prices
                        </li>
                    </ul>
                    <button className="bg-[#F54748] hidden md:block text-white py-3 px-6 rounded-[32px] ml-4 transform hover:translate-y-[-3px] transition-all duration-300 h-fit mt-auto">
                        About Us
                    </button>
                </div>
                
            </div>
        </div>
    );
}

export default About;
