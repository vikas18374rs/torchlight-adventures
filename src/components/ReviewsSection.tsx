import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    quote: "Runic Games delivers pure, perfectly paced loot-driven euphoria.",
    source: "IGN",
  },
  {
    quote: "Torchlight is a vibrant, fun, steampunky world, and exploring it is an absolutely addictive pleasure.",
    source: "Joystiq",
  },
  {
    quote: "A sprawling, ambitious game that does one thing very, very well. It gives you a world you'll want to explore, filled with enemies you'll love to destroy.",
    source: "Kotaku",
  },
  {
    quote: "Grab the game, grab some friends, and get to clicking.",
    source: "Destructoid",
  },
  {
    quote: "It's got heart. Moxie. It's the scrappy underdog that everyone wants to love, and it just so happens to be the best Action RPG I've played in years.",
    source: "Co-Optimus",
  },
];

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Critical Reactions
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Main Review */}
          <div className="relative bg-background/50 rounded-lg p-8 md:p-12 border border-border/30">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/30" />
            
            <div className="text-center">
              <p className="text-xl md:text-2xl text-foreground/90 italic font-light leading-relaxed mb-6">
                "{reviews[currentIndex].quote}"
              </p>
              <span className="text-primary font-display uppercase tracking-wider text-sm">
                — {reviews[currentIndex].source}
              </span>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
