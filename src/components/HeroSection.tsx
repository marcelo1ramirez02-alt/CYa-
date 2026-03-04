import { Search, MapPin, Calendar, Clock, Dribbble } from "lucide-react";
import heroImg from "@/assets/hero-field.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-20 md:pt-28 overflow-hidden">
      <div className="container">
        {/* Small subtitle */}
        <p className="text-center text-muted-foreground text-sm md:text-base mb-4 animate-fade-up">
          Reserva campos deportivos en segundos
        </p>

        {/* Title in normal flow, but in front of image via z-index */}
        <div className="relative text-center">
          <h1 className="relative z-10 text-[4rem] md:text-[7rem] lg:text-[9rem] font-extrabold tracking-tighter leading-[0.85] text-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
            cancha ya!
          </h1>

          {/* Hero image overlapping up into the title */}
          <div className="relative -mt-6 md:-mt-12 w-full animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Cancha de fútbol 7 iluminada de noche"
                className="w-full h-[280px] md:h-[420px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Search bar overlapping bottom of image */}
            <div className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-8 z-20">
              <div className="bg-background/95 backdrop-blur-md rounded-2xl p-2.5 md:p-3 shadow-xl border border-border/50">
                <div className="flex items-center gap-1 md:gap-2">
                  <SearchField icon={<MapPin size={14} />} label="Ciudad o distrito" value="Lima, Perú" />
                  <div className="w-px h-8 bg-border hidden md:block" />
                  <SearchField icon={<Calendar size={14} />} label="Fecha" value="03 Mar 2026" />
                  <div className="w-px h-8 bg-border hidden md:block" />
                  <SearchField icon={<Clock size={14} />} label="Hora" value="19:00 - 20:00" className="hidden md:flex" />
                  <div className="w-px h-8 bg-border hidden lg:block" />
                  <SearchField icon={<Dribbble size={14} />} label="Tipo de cancha" value="Fútbol 7" className="hidden lg:flex" />
                  <button className="ml-auto w-11 h-11 bg-primary hover:bg-primary/90 transition-colors rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shrink-0">
                    <Search size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing for the overflowing search bar */}
      <div className="h-12" />
    </section>
  );
};

const SearchField = ({ icon, label, value, className = "" }: { icon: React.ReactNode; label: string; value: string; className?: string }) => (
  <div className={`flex flex-col gap-0.5 px-3 py-1.5 rounded-lg hover:bg-secondary/60 transition-colors cursor-pointer min-w-0 ${className}`}>
    <span className="text-[9px] md:text-[10px] text-muted-foreground flex items-center gap-1 whitespace-nowrap">
      {icon} {label}
    </span>
    <span className="text-[11px] md:text-xs font-medium truncate">{value}</span>
  </div>
);

export default HeroSection;
