import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./toggleTheme";

export default function Navbar() {
  return (
    <>
      <nav className="fixed z-10 flex justify-center w-full gap-4 p-4">
        <div className="flex items-center justify-center gap-4 p-2 border rounded-2xl bg-slate-200">
        <Button variant="link">
          <Link href="/">Home</Link>
        </Button>
        <Button variant="link">
          <Link href="/projects">Projects</Link>
        </Button>
        <Button variant="link">
          <Link href="/blogs">Blogs</Link>
        </Button>
        <Button variant="link">
          <Link href="/contact">Contact</Link>
        </Button>
        <ModeToggle/>
        </div>
      </nav>
    </>
  );
}
