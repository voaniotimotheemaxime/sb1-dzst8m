import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationMenu } from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">NoveoDigital</span>
          </a>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary">Services</a>
          <a href="#portfolio" className="text-sm font-medium hover:text-primary">Portfolio</a>
          <a href="#about" className="text-sm font-medium hover:text-primary">À propos</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">Contact</a>
        </nav>

        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#services" className="text-sm font-medium hover:text-primary">Services</a>
                <a href="#portfolio" className="text-sm font-medium hover:text-primary">Portfolio</a>
                <a href="#about" className="text-sm font-medium hover:text-primary">À propos</a>
                <a href="#contact" className="text-sm font-medium hover:text-primary">Contact</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}