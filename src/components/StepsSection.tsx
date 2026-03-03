import { Search, CalendarCheck, CreditCard } from "lucide-react";

const steps = [
  { icon: <Search size={32} />, title: "Busca tu cancha", desc: "Encuentra la cancha perfecta cerca de ti" },
  { icon: <CalendarCheck size={32} />, title: "Elige horario", desc: "Selecciona fecha y hora disponible" },
  { icon: <CreditCard size={32} />, title: "Confirma y paga", desc: "Reserva segura en segundos" },
];

const StepsSection = () => {
  return (
    <section id="pasos" className="py-16 md:py-24">
      <div className="container">
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-primary-foreground max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Reserva en 3 pasos
          </h2>
          <p className="text-center text-primary-foreground/80 mb-12 text-sm md:text-base">
            Simple, rápido y seguro
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3.5 bg-background text-primary font-bold rounded-2xl hover:bg-background/90 transition-colors text-sm">
              Explorar canchas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
