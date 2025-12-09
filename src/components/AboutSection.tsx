import { Sparkles, Wrench, Fish, Award } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Randomization",
    description: "Your adventure is uniquely your own. Explore seven lovingly crafted environments randomly generated with new monsters, treasures, puzzles, and items each time you embark on your journey.",
    color: "ember-green",
  },
  {
    icon: Wrench,
    title: "Mod Support",
    description: "All of the tools we used to make Torchlight are fully available in TorchED. Change your gameplay experience, or create something entirely new to explore and share.",
    color: "ember-yellow",
  },
  {
    icon: Fish,
    title: "Pets & Fishing",
    description: "Take a break from adventuring and go fishing. Your catch will help you along your journey. Choose a faithful companion to accompany you - your pet will carry items, help in battle, and can even transform into powerful allies!",
    color: "ember-purple",
  },
  {
    icon: Award,
    title: "Retirement System",
    description: "Hanging up your boots doesn't mean the adventure has to be over. \"Retire\" your hero and pass down a prized item imbued with unique attributes for your new hero.",
    color: "ember-blue",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            About the Game
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Welcome to Torchlight! A boom town founded on the discovery of rich veins of Ember, a rare and mysterious ore with the power to enchant or corrupt all that it touches. Emboldened by its power, legions of twisted creatures have begun to swarm up from the tunnels and caves below town.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-lg bg-card/50 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}/20 flex items-center justify-center shrink-0`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
