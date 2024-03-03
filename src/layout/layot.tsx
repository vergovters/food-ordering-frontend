import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header"
import Hero from "@/components/Hero/Hero.tsx";


type Props = {
    children: React.ReactNode;
}

const Layot = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <Hero/>
        <div className="container mx-auto flex-1 py-10">
            {children}
        </div>
        <Footer/>
    </div>
  )
}


export default Layot;
