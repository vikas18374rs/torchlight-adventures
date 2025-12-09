import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        {/* Logo/Title */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary ember-text mb-8 animate-fade-in">
          TORCHLIGHT
        </h1>

        {/* Subtitle */}
        <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Explore the depths, collect loot, and level up as you save Torchlight – and possibly the world.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://www.youtube.com/watch?v=ghQBj6Gfn10"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <Play className="w-6 h-6 ml-1 group-hover:text-primary-foreground transition-colors" />
            </div>
            <span className="font-display uppercase tracking-wider text-sm">Play Trailer</span>
          </a>

          <Button variant="cta" size="xl" className="ml-0 sm:ml-8">
            Buy Now
          </Button>
        </div>

        {/* Platform Icons */}
        <div className="flex items-center justify-center gap-6 mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {["Windows", "Mac", "Linux", "Xbox"].map((platform) => (
            <div
              key={platform}
              className="w-10 h-10 rounded bg-muted/50 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-muted transition-all cursor-pointer"
              title={platform}
            >
              <span className="text-xs font-medium">{platform[0]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
