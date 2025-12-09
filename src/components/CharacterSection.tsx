import { useState } from "react";
import alchemistImg from "@/assets/alchemist.png";
import vanquisherImg from "@/assets/vanquisher.png";
import destroyerImg from "@/assets/destroyer.png";

const characters = [
  {
    id: "alchemist",
    name: "Alchemist",
    image: alchemistImg,
    description: "The Alchemist did not necessarily come to Torchlight for adventure and heroism. Ember is a cornerstone of his magical art, and the beleaguered town sits atop the largest cache of this magical mineral ever found. By channeling the power of Ember, the Alchemist is able to dispatch enemies from afar as well as summon minions to his aid.",
    tagline: "Will the power of Ember be the tool of his triumph or cause of his doom?",
  },
  {
    id: "vanquisher",
    name: "Vanquisher",
    image: vanquisherImg,
    description: "Part of an ancient order dedicated to justice and bringing balance to the world, the Vanquisher was dispatched to Torchlight to investigate the mysterious slayings and missing townsfolk. In combat, the Vanquisher can pick off enemies from afar, or use traps to confuse and debilitate her foes from all directions.",
    tagline: "Cut off from the support of her order, the dark power of Ember will test the Vanquisher's skill and conviction to the fullest.",
  },
  {
    id: "destroyer",
    name: "Destroyer",
    image: destroyerImg,
    description: "For an endless wanderer drawn to conflict with his dual-wielding blades, the chance to battle evil in Torchlight proved irresistible. Channeling the warrior spirits of his ancestors, the Destroyer excels at close-quarter combat, easily overwhelming multiple enemies at once with his speed and ferocity.",
    tagline: "With the darkness rising to cloud the Destroyer's judgment, only time will tell if his mighty heart can resist Ember's corruption.",
  },
];

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
          </div>
        </div>
      </div>
    </section>
  );
}
