import appMockup from "@/assets/app-mockup.jpg";

const CommunitySection = () => {
  return (
    <section id="comunidad" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-2">Descubre la experiencia</p>
        <h2 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-12">Cancha Ya!</h2>

        <div className="flex justify-center">
          <div className="relative max-w-xs">
            <img
              src={appMockup}
              alt="App Cancha Ya"
              className="rounded-3xl shadow-2xl border border-border/30"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-5 py-2.5 rounded-2xl font-bold text-sm shadow-lg">
              ¡Únete al partido! ⚽
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
