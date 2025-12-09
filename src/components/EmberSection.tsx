export function EmberSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary ember-text mb-8">
            Ember
          </h2>

          <div className="space-y-4 text-lg md:text-xl text-foreground/80 italic mb-12">
            <p>Merchants prize it for trade...</p>
            <p>...enchanters distill it for magical energy...</p>
            <p className="text-primary">...but a shadowy few crave it for the lure of unsurpassed power.</p>
          </div>

          {/* Ember Crystals Visual */}
          <div className="flex items-center justify-center gap-4 my-12">
            {["ember-green", "ember-yellow", "ember-purple", "ember-blue", "ember-red"].map((color, index) => (
              <div
                key={color}
                className="w-8 h-12 rounded-sm rotate-45 animate-float"
                style={{
                  backgroundColor: `hsl(var(--${color}))`,
                  boxShadow: `0 0 20px hsl(var(--${color}) / 0.6)`,
                  animationDelay: `${index * 0.2}s`,
                }}
              />
            ))}
          </div>

          <p className="text-foreground/60 leading-relaxed max-w-3xl mx-auto">
            Miners burrowed deep beneath the dirt streets of Torchlight, discovering veins of the ore richer than any found in living memory, but they were not the first to covet these mines. The miners broke into the buried past, a dangerous labyrinth of caverns and ruined civilizations, twisted creatures and the bones of those who came before. Evil bubbles up from the depths and threatens to overrun this town as it has so many others.
          </p>
        </div>
      </div>
    </section>
  );
}
