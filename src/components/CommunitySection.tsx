import appMockup from "@/assets/app-mockup.jpg";

const CommunitySection = () => {
  return (
    <section id="comunidad" className="py-16 md:py-24 bg-secondary">
      <div className="container text-center">
        <p className="text-sm text-muted-foreground mb-2">Vive la experiencia</p>
        <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-extrabold tracking-tighter leading-none mb-12">
          Cancha Ya!
        </h2>

        <div className="flex justify-center">
          <div className="relative max-w-[260px]">
            <img
              src={appMockup}
              alt="App Cancha Ya"
              className="rounded-[2rem] shadow-2xl border border-border/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
