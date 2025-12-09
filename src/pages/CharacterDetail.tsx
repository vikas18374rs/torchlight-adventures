import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Sword, Wand2, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCharacterById, characters } from "@/data/characters";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function StatBar({ label, value, icon: Icon }: { label: string; value: number; icon: React.ElementType }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 text-foreground/70">
          <Icon className="w-4 h-4 text-primary" />
          {label}
        </span>
        <span className="text-foreground font-medium">{value}</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-ember rounded-full transition-all duration-1000"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default function CharacterDetail() {
  const { characterId } = useParams<{ characterId: string }>();
  const character = characterId ? getCharacterById(characterId) : undefined;

  if (!character) {
    return <Navigate to="/" replace />;
  }

  const otherCharacters = characters.filter((c) => c.id !== character.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/#classes"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-display text-sm uppercase tracking-wider">Back to Classes</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Character Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-3xl" />
              <div className="absolute -inset-4 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img
                src={character.image}
                alt={character.name}
                className="w-full max-w-lg mx-auto relative z-0 animate-fade-in"
              />
            </div>

            {/* Character Info */}
            <div className="space-y-6 order-1 lg:order-2 animate-fade-in">
              <div>
                <p className="text-primary font-display uppercase tracking-widest text-sm mb-2">
                  {character.role}
                </p>
                <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground ember-text">
                  {character.name}
                </h1>
              </div>

              <p className="text-foreground/70 text-lg leading-relaxed">
                {character.description}
              </p>

              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                "{character.tagline}"
              </blockquote>

              <Button variant="ember" size="lg" className="mt-4">
                Play as {character.name}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Playstyle */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Stats */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Character Stats
              </h2>
              <div className="bg-background/50 rounded-xl p-6 space-y-4 border border-border/30">
                <StatBar label="Strength" value={character.stats.strength} icon={Sword} />
                <StatBar label="Magic" value={character.stats.magic} icon={Wand2} />
                <StatBar label="Dexterity" value={character.stats.dexterity} icon={Target} />
                <StatBar label="Defense" value={character.stats.defense} icon={Shield} />
              </div>
            </div>

            {/* Playstyle */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Playstyle
              </h2>
              <div className="bg-background/50 rounded-xl p-6 border border-border/30">
                <p className="text-foreground/70 leading-relaxed">
                  {character.playstyle}
                </p>
              </div>

              <h2 className="font-display text-3xl font-bold text-foreground pt-4">
                Lore
              </h2>
              <div className="bg-background/50 rounded-xl p-6 border border-border/30">
                <p className="text-foreground/70 leading-relaxed">
                  {character.lore}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Signature Skills
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {character.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group bg-card rounded-xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <span
                      className={`text-xs uppercase tracking-wider px-2 py-1 rounded ${
                        skill.type === "active"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-foreground/60"
                      }`}
                    >
                      {skill.type}
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Characters */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Explore Other Classes
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {otherCharacters.map((char) => (
                <Link
                  key={char.id}
                  to={`/character/${char.id}`}
                  className="group flex items-center gap-6 bg-background/50 rounded-xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-300"
                >
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <p className="text-primary/70 text-sm uppercase tracking-wider">{char.role}</p>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {char.name}
                    </h3>
                    <p className="text-foreground/60 text-sm line-clamp-2 mt-1">
                      {char.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
