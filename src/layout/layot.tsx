import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header"
import Hero from "@/components/Hero/Hero.tsx";


type Props = {
    children: React.ReactNode;
    showHero?: boolean;
}

const Layot = ({ children, showHero }: Props) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
        <Header/>
        {showHero && <Hero />}
        <div className="container mx-auto flex-1 py-10">
            {children}
        </div>
        <hr className="border-t border-red-300 my-8" />
        <Footer/>
    </div>
  )
}


export default Layot;
