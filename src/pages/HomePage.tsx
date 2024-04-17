import Comments from "@/components/comments/Comments/Comments";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import redDots from "../assets/redDots.jpg"
import About from "@/components/About";
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => {
    const navigate = useNavigate()
    const handleSearch = (searchValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchValues.searchQuery}`
        })
    }
    return(
        <div className="flex flex-col gap-12 relative font-body">
            <div className="bg-white py-8 flex flex-col gap-5 text-center mt-[300px]">
                <h1 className="text-5xl font-bold tracking-tight font-body">
                    The <span className="text-yellow-500">Best</span> Choice For Your <span className="text-red-500">Food</span>
                </h1>
                <span className="text-xl">Food is just waiting for you!</span>
                <SearchBar placeHolder="Search" onSubmit={handleSearch}/>
                <img src={redDots} alt="" className="absolute w-48 md:w-64 opacity-35 top-[30%] right-[5%] md:right-[10%]"/>
            </div>
            <About/>
            <Comments/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-[40px] tracking-tighter">
                    It's Now <span className="text-red-500">More Easy</span> to <span className="text-yellow-500">Order</span><br/>
                    by Our Mobile <span className="text-red-500">App</span>
                </span>
                <span>
                    All you need to do is downlode one of the best delivery apps, make a and most companies are opting for mobile app devlopment for food delivery
                </span>
                <img src={appDownloadImage} />
            </div>
        </div>
    )
}

export default HomePage;