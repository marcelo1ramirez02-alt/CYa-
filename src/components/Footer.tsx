const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Política de Privacidad</a>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-[10px] font-bold">⚽</span>
            </div>
            <span className="font-sora font-bold text-sm">Cancha Ya!</span>
          </div>

          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Términos y Condiciones</a>
        </div>

        {/* Massive brand name like reference footer */}
        <h3 className="text-center text-4xl md:text-6xl lg:text-[6rem] font-extrabold tracking-tighter leading-none text-foreground/10 select-none">
          Cancha Ya!
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
