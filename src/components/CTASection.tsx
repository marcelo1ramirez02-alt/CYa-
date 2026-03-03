const CTASection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container text-center">
        <p className="text-muted-foreground text-sm mb-2">¿Listo para jugar?</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
          Juega hoy con<br />
          <span className="text-gradient-primary">Cancha Ya!</span>
        </h2>
        <button className="px-10 py-4 bg-primary text-primary-foreground font-bold rounded-2xl text-lg hover:bg-primary/90 transition-colors shadow-lg">
          Reservar ahora
        </button>
      </div>
    </section>
  );
};

export default CTASection;
