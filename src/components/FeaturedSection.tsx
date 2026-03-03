import { Star, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-field.jpg";
import complexImg from "@/assets/complex-deportivo.jpg";
import padelImg from "@/assets/padel-court.jpg";

const featured = [
  { name: "Complejo Deportivo Premium", location: "Miraflores", rating: 4.9, price: 150, image: heroImg, available: true },
  { name: "Club Padel & Fútbol", location: "San Isidro", rating: 4.8, price: 130, image: padelImg, available: true },
  { name: "Arena Sport Center", location: "La Molina", rating: 4.7, price: 110, image: complexImg, available: false },
];

const FeaturedSection = () => {
  return (
    <section id="destacadas" className="py-16 md:py-24 bg-surface-dark text-surface-dark-foreground">
      <div className="container">
        <p className="text-center text-sm text-surface-dark-foreground/60 mb-2">Exclusivo en</p>
        <h2 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-12">Lima</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featured.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden bg-foreground/10 border border-foreground/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.available && (
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full">
                    Disponible ahora
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <p className="text-surface-dark-foreground/50 text-xs flex items-center gap-1 mb-3">
                  <MapPin size={12} /> {item.location}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        className={j < Math.floor(item.rating) ? "fill-primary text-primary" : "text-surface-dark-foreground/20"}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-xl">S/{item.price}<span className="text-xs font-normal text-surface-dark-foreground/50">/hr</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
