import { Star, MapPin, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-field.jpg";
import complexImg from "@/assets/complex-deportivo.jpg";
import padelImg from "@/assets/padel-court.jpg";
import futbol5Img from "@/assets/futbol5.jpg";
import basketImg from "@/assets/basketball-court.jpg";

const FeaturedSection = () => {
  return (
    <section id="destacadas" className="py-16 md:py-24 bg-surface-dark text-surface-dark-foreground">
      <div className="container max-w-5xl">
        <p className="text-center text-sm text-surface-dark-foreground/50 mb-2">Las mejores canchas en</p>
        <h2 className="text-center text-5xl md:text-7xl lg:text-[8rem] font-extrabold tracking-tighter mb-12 leading-none">Lima</h2>

        {/* Top row: accent "Canchas" block + 2 cards (like reference Hotels row) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {/* Large accent block */}
          <div className="bg-primary rounded-3xl p-6 flex flex-col justify-between min-h-[260px] col-span-1">
            <div>
              <h3 className="text-primary-foreground font-bold text-2xl md:text-3xl mb-2">Canchas</h3>
              <p className="text-primary-foreground/80 text-sm">
                Tu destino deportivo te espera, reserva y juega.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-primary-foreground/30 border-2 border-primary" />
                <div className="w-7 h-7 rounded-full bg-primary-foreground/20 border-2 border-primary" />
                <div className="w-7 h-7 rounded-full bg-primary-foreground/10 border-2 border-primary" />
              </div>
              <button className="ml-auto w-10 h-10 rounded-full bg-primary-foreground text-primary flex items-center justify-center hover:scale-105 transition-transform">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* Card 1 */}
          <FeaturedCard
            image={heroImg}
            name="Complejo Gol Premium"
            location="Miraflores"
            price={150}
            rating={4.9}
          />
          {/* Card 2 */}
          <FeaturedCard
            image={padelImg}
            name="Club Padel Lima"
            location="San Isidro"
            price={130}
            rating={4.8}
          />
        </div>

        {/* Bottom row: 2 cards + accent "Torneos" block (like reference Bus & Travel row) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <FeaturedCard
            image={futbol5Img}
            name="Arena Sport Center"
            location="La Molina"
            price={95}
            rating={4.7}
          />
          <FeaturedCard
            image={basketImg}
            name="Pro Hoops Club"
            location="Surco"
            price={75}
            rating={4.5}
          />
          {/* Accent block */}
          <div className="bg-primary rounded-3xl p-6 flex flex-col justify-between min-h-[260px]">
            <div>
              <h3 className="text-primary-foreground font-bold text-2xl md:text-3xl mb-2">Torneos &<br/>Eventos</h3>
              <p className="text-primary-foreground/80 text-sm">
                Organiza torneos con opciones flexibles
              </p>
            </div>
            <div className="flex justify-end">
              <button className="w-10 h-10 rounded-full bg-primary-foreground text-primary flex items-center justify-center hover:scale-105 transition-transform">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedCard = ({ image, name, location, price, rating }: { image: string; name: string; location: string; price: number; rating: number }) => (
  <div className="group rounded-3xl overflow-hidden bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
    <div className="relative h-36 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-sm mb-0.5">{name}</h3>
      <p className="text-surface-dark-foreground/50 text-xs flex items-center gap-1 mb-2">
        <MapPin size={10} /> {location}
      </p>
      <div className="flex items-center gap-1 mb-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={11} className={i < Math.floor(rating) ? "fill-primary text-primary" : "text-surface-dark-foreground/20"} />
        ))}
      </div>
      <p className="font-bold text-lg">
        S/{price}<span className="text-xs font-normal text-surface-dark-foreground/50">/hr</span>
      </p>
    </div>
  </div>
);

export default FeaturedSection;
