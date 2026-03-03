import { useState } from "react";
import { Star, MapPin, ArrowUpRight } from "lucide-react";
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

const courtsByTab: Record<string, { courts: Court[]; accentTitle: string; accentDesc: string }> = {
  Fútbol: {
    courts: [
      { name: "Complejo Gol FC", location: "Miraflores", rating: 4.8, price: 120, image: futbol5Img },
      { name: "La Bombonera", location: "San Borja", rating: 4.5, price: 95, image: complexImg },
      { name: "Cancha Pro Lima", location: "Surco", rating: 4.7, price: 110, image: futbol5Img },
    ],
    accentTitle: "Fútbol",
    accentDesc: "Reserva tu cancha favorita y vive la emoción",
  },
  Pádel: {
    courts: [
      { name: "Padel Zone", location: "La Molina", rating: 4.9, price: 80, image: padelImg },
      { name: "Club Padel Lima", location: "San Isidro", rating: 4.6, price: 90, image: padelImg },
      { name: "Smash Padel", location: "Surquillo", rating: 4.4, price: 70, image: padelImg },
    ],
    accentTitle: "Pádel",
    accentDesc: "Las mejores canchas de pádel te esperan",
  },
  Básquet: {
    courts: [
      { name: "Basket Center", location: "Jesús María", rating: 4.3, price: 60, image: basketImg },
      { name: "NBA Court Lima", location: "Lince", rating: 4.7, price: 75, image: basketImg },
      { name: "Pro Hoops", location: "Pueblo Libre", rating: 4.5, price: 65, image: basketImg },
    ],
    accentTitle: "Básquet",
    accentDesc: "Canchas profesionales para tu mejor juego",
  },
  Vóley: {
    courts: [
      { name: "Vóley Plus", location: "Magdalena", rating: 4.6, price: 55, image: voleyImg },
      { name: "Arena Voley", location: "Breña", rating: 4.4, price: 50, image: voleyImg },
      { name: "Set & Spike", location: "Chorrillos", rating: 4.2, price: 45, image: voleyImg },
    ],
    accentTitle: "Vóley",
    accentDesc: "Reserva y juega con tu equipo hoy",
  },
  Tenis: {
    courts: [
      { name: "Tennis Club Lima", location: "San Borja", rating: 4.8, price: 90, image: tennisImg },
      { name: "Ace Court", location: "La Molina", rating: 4.5, price: 85, image: tennisImg },
      { name: "Match Point", location: "Surco", rating: 4.6, price: 80, image: tennisImg },
    ],
    accentTitle: "Tenis",
    accentDesc: "Canchas de tenis premium en Lima",
  },
};

const ExperiencesSection = () => {
  const [activeTab, setActiveTab] = useState("Fútbol");
  const data = courtsByTab[activeTab];

  return (
    <section id="experiencias" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">
          Reserva fácil y rápida
        </h2>

        {/* Tabs - pill style like reference */}
        <div className="flex justify-center gap-1.5 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeTab === tab
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-foreground border-border hover:border-foreground/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards grid: 3 cards + 1 accent block (like reference) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {data.courts.map((court, i) => (
            <CourtCard key={i} court={court} />
          ))}
          {/* Accent block */}
          <div className="bg-primary rounded-3xl p-6 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="text-primary-foreground font-bold text-2xl mb-2">{data.accentTitle}</h3>
              <p className="text-primary-foreground/80 text-sm">{data.accentDesc}</p>
            </div>
            <button className="self-end w-12 h-12 rounded-full bg-primary-foreground text-primary flex items-center justify-center hover:scale-105 transition-transform">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CourtCard = ({ court }: { court: Court }) => (
  <div className="group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="relative h-40 overflow-hidden">
      <img
        src={court.image}
        alt={court.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-sm mb-0.5">{court.name}</h3>
      <p className="text-muted-foreground text-xs flex items-center gap-1 mb-2">
        <MapPin size={10} /> {court.location}
      </p>
      <div className="flex items-center gap-1 mb-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < Math.floor(court.rating) ? "fill-primary text-primary" : "text-border"}
          />
        ))}
      </div>
      <p className="font-bold text-base">
        S/{court.price}<span className="text-xs font-normal text-muted-foreground">/hr</span>
      </p>
    </div>
  </div>
);

export default ExperiencesSection;
