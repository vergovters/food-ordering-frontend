import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-blue-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                <span>Welcome to website</span>
                <Separator></Separator>
                <SheetDescription className="flex">
                    <button className="flex-1 font-bold bg-blue-500 text-white">Log in</button>
                </SheetDescription>
            </SheetTitle>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav;