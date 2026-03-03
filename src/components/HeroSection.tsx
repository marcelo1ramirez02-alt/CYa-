import { Search, MapPin, Calendar, Clock, Dribbble } from "lucide-react";
import heroImg from "@/assets/hero-field.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-muted-foreground text-sm md:text-base mb-3 animate-fade-up">
            Tu próxima cancha te espera
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Cancha Ya!
          </h1>
          <p className="text-muted-foreground mt-4 text-base md:text-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Reserva campos deportivos en segundos
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <img
            src={heroImg}
            alt="Cancha de fútbol 7 iluminada de noche"
            className="w-full h-[280px] md:h-[420px] object-cover"
          />

          {/* Search bar overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <div className="bg-background/95 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-xl border border-border/50">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <SearchField icon={<MapPin size={16} />} label="Ciudad o distrito" value="Lima, Perú" />
                <SearchField icon={<Calendar size={16} />} label="Fecha" value="03 Mar 2026" />
                <SearchField icon={<Clock size={16} />} label="Hora" value="19:00 - 20:00" />
                <SearchField icon={<Dribbble size={16} />} label="Tipo de cancha" value="Fútbol 7" />
                <div className="col-span-2 md:col-span-1 flex items-end">
                  <button className="w-full md:w-14 h-12 md:h-14 bg-primary hover:bg-primary/90 transition-colors rounded-xl md:rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                    <Search size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SearchField = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex flex-col gap-1 px-3 py-2 rounded-xl hover:bg-secondary/60 transition-colors cursor-pointer">
    <span className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-1">
      {icon} {label}
    </span>
    <span className="text-xs md:text-sm font-medium truncate">{value}</span>
  </div>
);

export default HeroSection;
