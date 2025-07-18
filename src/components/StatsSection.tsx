export const StatsSection = () => {
  const stats = [
    {
      number: "10K+",
      label: "posts generados",
    },
    {
      number: "500+",
      label: "reviews de 5 estrellas",
    },
    {
      number: "15h/sem",
      label: "ahorradas por equipo",
    },
    {
      number: "2K+",
      label: "startups usuarias",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};