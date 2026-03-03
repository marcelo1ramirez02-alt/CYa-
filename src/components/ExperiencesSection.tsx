import { useState } from "react";
import { Star, MapPin } from "lucide-react";
import futbol5Img from "@/assets/futbol5.jpg";
import padelImg from "@/assets/padel-court.jpg";
import basketImg from "@/assets/basketball-court.jpg";
import voleyImg from "@/assets/volleyball-court.jpg";
import tennisImg from "@/assets/tennis-court.jpg";
import complexImg from "@/assets/complex-deportivo.jpg";

const tabs = ["Fútbol", "Pádel", "Básquet", "Vóley", "Tenis"];

type Court = {
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
};

const courtsByTab: Record<string, Court[]> = {
  Fútbol: [
    { name: "Complejo Gol FC", location: "Miraflores", rating: 4.8, price: 120, image: futbol5Img },
    { name: "La Bombonera", location: "San Borja", rating: 4.5, price: 95, image: complexImg },
    { name: "Cancha Pro Lima", location: "Surco", rating: 4.7, price: 110, image: futbol5Img },
  ],
  Pádel: [
    { name: "Padel Zone", location: "La Molina", rating: 4.9, price: 80, image: padelImg },
    { name: "Club Padel Lima", location: "San Isidro", rating: 4.6, price: 90, image: padelImg },
    { name: "Smash Padel", location: "Surquillo", rating: 4.4, price: 70, image: padelImg },
  ],
  Básquet: [
    { name: "Basket Center", location: "Jesús María", rating: 4.3, price: 60, image: basketImg },
    { name: "NBA Court Lima", location: "Lince", rating: 4.7, price: 75, image: basketImg },
    { name: "Pro Hoops", location: "Pueblo Libre", rating: 4.5, price: 65, image: basketImg },
  ],
  Vóley: [
    { name: "Vóley Plus", location: "Magdalena", rating: 4.6, price: 55, image: voleyImg },
    { name: "Arena Voley", location: "Breña", rating: 4.4, price: 50, image: voleyImg },
    { name: "Set & Spike", location: "Chorrillos", rating: 4.2, price: 45, image: voleyImg },
  ],
  Tenis: [
    { name: "Tennis Club Lima", location: "San Borja", rating: 4.8, price: 90, image: tennisImg },
    { name: "Ace Court", location: "La Molina", rating: 4.5, price: 85, image: tennisImg },
    { name: "Match Point", location: "Surco", rating: 4.6, price: 80, image: tennisImg },
  ],
};

const ExperiencesSection = () => {
  const [activeTab, setActiveTab] = useState("Fútbol");

  return (
    <section id="experiencias" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-center text-sm md:text-base text-muted-foreground mb-2">
          Reserva fácil y rápida
        </h2>
        <p className="text-center text-3xl md:text-4xl font-bold mb-10">
          Experiencias deportivas
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {courtsByTab[activeTab].map((court, i) => (
            <CourtCard key={i} court={court} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CourtCard = ({ court }: { court: Court }) => (
  <div className="group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="relative h-48 overflow-hidden">
      <img
        src={court.image}
        alt={court.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-5">
      <h3 className="font-semibold text-base mb-1">{court.name}</h3>
      <p className="text-muted-foreground text-xs flex items-center gap-1 mb-3">
        <MapPin size={12} /> {court.location}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(court.rating) ? "fill-primary text-primary" : "text-border"}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">{court.rating}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">S/{court.price}</span>
          <span className="text-xs text-muted-foreground">/hr</span>
        </div>
      </div>
      <button className="mt-4 w-full py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors">
        Reservar
      </button>
    </div>
  </div>
);

export default ExperiencesSection;
