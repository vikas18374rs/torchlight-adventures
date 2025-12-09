import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { characters } from "@/data/characters";

export function CharacterSection() {
  const [activeCharacter, setActiveCharacter] = useState(characters[0]);

  return (
    <section id="classes" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Character Classes
          </h2>
          <p className="text-foreground/60 text-lg">
            Delve into adventure. Choose your hero.
          </p>
        </div>

        {/* Character Tabs */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {characters.map((char) => (
            <button
              key={char.id}
              onClick={() => setActiveCharacter(char)}
              className={`font-display text-sm md:text-base uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCharacter.id === char.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-foreground/60 hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {char.name}
            </button>
          ))}
        </div>

        {/* Character Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Character Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-lg" />
            <img
              src={activeCharacter.image}
              alt={activeCharacter.name}
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl transition-all duration-500"
            />
          </div>

          {/* Character Info */}
          <div className="space-y-6">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-primary">
              {activeCharacter.name}
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              {activeCharacter.description}
            </p>
            <p className="text-foreground/90 italic border-l-2 border-primary pl-4">
              {activeCharacter.tagline}
            </p>
            <Link to={`/character/${activeCharacter.id}`}>
              <Button variant="ember" size="lg" className="mt-2">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
