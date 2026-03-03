import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <button
          className="md:hidden p-2 rounded-lg border border-border text-sm font-medium"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">⚽</span>
          </div>
          <span className="font-sora font-bold text-lg">Cancha Ya!</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#experiencias" className="hover:text-foreground transition-colors">Canchas</a>
          <a href="#destacadas" className="hover:text-foreground transition-colors">Destacadas</a>
          <a href="#pasos" className="hover:text-foreground transition-colors">Cómo funciona</a>
          <a href="#comunidad" className="hover:text-foreground transition-colors">Comunidad</a>
        </div>

        <button className="px-5 py-2 rounded-2xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity">
          Login
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-3 text-sm font-medium animate-fade-in">
          <a href="#experiencias" onClick={() => setOpen(false)}>Canchas</a>
          <a href="#destacadas" onClick={() => setOpen(false)}>Destacadas</a>
          <a href="#pasos" onClick={() => setOpen(false)}>Cómo funciona</a>
          <a href="#comunidad" onClick={() => setOpen(false)}>Comunidad</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
