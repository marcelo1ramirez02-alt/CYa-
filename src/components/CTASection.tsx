const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container text-center">
        <p className="text-muted-foreground text-sm mb-3">¿Listo para jugar?</p>
        <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-extrabold tracking-tighter leading-none mb-8">
          Cancha Ya!
        </h2>
        <button className="px-10 py-4 bg-primary text-primary-foreground font-bold rounded-2xl text-base hover:bg-primary/90 transition-colors shadow-lg">
          Reservar ahora
        </button>
      </div>
    </section>
  );
};

export default CTASection;
