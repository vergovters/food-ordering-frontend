import Comments from "@/components/comments/Comments/Comments";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()
    const handleSearch = (searchValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchValues.searchQuery}`
        })
    }
    return(
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center mt-24">
                <h1 className="text-5xl font-bold tracking-tight text-blue-600">
                    The best choice for your food
                </h1>
                <span className="text-xl">Food is just waiting for you!</span>
                <SearchBar placeHolder="Search" onSubmit={handleSearch}/>
            </div>
            <Comments/>
        </div>
    )
}

export default HomePage;