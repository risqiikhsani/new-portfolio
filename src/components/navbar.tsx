import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./toggleTheme";
import { Bars2Icon, CubeIcon, HomeIcon, PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Navbar() {
  return (
    <>
      <nav className="fixed z-10 flex justify-center w-full gap-4 p-4 dark:bg-slate-800 bg-slate-50">


        <Sheet>
          <SheetTrigger asChild>
            <Button className="block md:hidden">
              <Bars2Icon className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col gap-4 pt-20">
            
            <SheetClose asChild>
              <Button asChild variant="outline">
                <Link href="/"><HomeIcon className="w-4 h-4 mr-2" />Home</Link>
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button asChild variant="outline">
                <Link href="/projects"><CubeIcon className="w-4 h-4 mr-2" />Projects</Link>
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button asChild variant="outline">
                <Link href="/blogs"><PhotoIcon className="w-4 h-4 mr-2" />Blogs</Link>
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button asChild variant="outline">
                <Link href="/contact"><UserCircleIcon className="w-4 h-4 mr-2" />Contact</Link>
              </Button>
            </SheetClose>

          </SheetContent>
        </Sheet>

        <div className="hidden md:flex gap-4">
          <Button asChild variant="outline">
            <Link href="/"><HomeIcon className="w-4 h-4 mr-2" />Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects"><CubeIcon className="w-4 h-4 mr-2" />Projects</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blogs"><PhotoIcon className="w-4 h-4 mr-2" />Blogs</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact"><UserCircleIcon className="w-4 h-4 mr-2" />Contact</Link>
          </Button>
        </div>

        <ModeToggle />

      </nav>
    </>
  );
}
