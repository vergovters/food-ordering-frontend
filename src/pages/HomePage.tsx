import Comments from "@/components/comments/Comments/Comments";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import redDots from "../assets/redDots.jpg"

const HomePage = () => {
    const navigate = useNavigate()
    const handleSearch = (searchValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchValues.searchQuery}`
        })
    }
    return(
        <div className="flex flex-col gap-12 relative">
            <div className="bg-white py-8 flex flex-col gap-5 text-center mt-[300px]">
                <h1 className="text-5xl font-bold tracking-tight font-body">
                    The <span className="text-yellow-500">Best</span> Choice For Your <span className="text-red-500">Food</span>
                </h1>
                <span className="text-xl">Food is just waiting for you!</span>
                <SearchBar placeHolder="Search" onSubmit={handleSearch}/>
                <img src={redDots} alt="" className="absolute w-[300px] opacity-35 top-[290px] left-[-380px]"/>
            </div>
            <Comments/>
        </div>
    )
}

export default HomePage;