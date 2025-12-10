import { useState } from "react";
import { SkillTree as SkillTreeType } from "@/data/skillTrees";
import { SkillTree } from "./SkillTree";
import { Sparkles, Swords, Shield, Wand2 } from "lucide-react";

interface SkillTreeSectionProps {
  trees: SkillTreeType[];
  characterName: string;
}

const treeIcons: Record<string, React.ElementType> = {
  "Arcane": Wand2,
  "Summoning": Sparkles,
  "Defense": Shield,
  "Marksmanship": Swords,
  "Traps": Sparkles,
  "Agility": Swords,
  "Berserker": Swords,
  "Titan": Shield,
  "Guardian": Shield,
};

const colorMap: Record<string, string> = {
  "ember-red": "from-red-500/20 to-red-600/10 border-red-500/30 hover:border-red-500/60",
  "ember-green": "from-green-500/20 to-green-600/10 border-green-500/30 hover:border-green-500/60",
  "ember-blue": "from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:border-blue-500/60",
  "ember-yellow": "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 hover:border-yellow-500/60",
  "ember-purple": "from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-500/60",
};

const activeColorMap: Record<string, string> = {
  "ember-red": "from-red-500/40 to-red-600/20 border-red-500 shadow-red-500/30",
  "ember-green": "from-green-500/40 to-green-600/20 border-green-500 shadow-green-500/30",
  "ember-blue": "from-blue-500/40 to-blue-600/20 border-blue-500 shadow-blue-500/30",
  "ember-yellow": "from-yellow-500/40 to-yellow-600/20 border-yellow-500 shadow-yellow-500/30",
  "ember-purple": "from-purple-500/40 to-purple-600/20 border-purple-500 shadow-purple-500/30",
};

export function SkillTreeSection({ trees, characterName }: SkillTreeSectionProps) {
  const [activeTree, setActiveTree] = useState(0);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Skill Trees
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Master the {characterName}'s abilities through three unique specialization paths. 
              Unlock powerful skills and shape your playstyle.
            </p>
          </div>

          {/* Tree tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {trees.map((tree, index) => {
              const Icon = treeIcons[tree.name] || Sparkles;
              const isActive = activeTree === index;
              
              return (
                <button
                  key={tree.name}
                  onClick={() => setActiveTree(index)}
                  className={`
                    relative px-6 py-4 rounded-xl border-2 transition-all duration-300
                    bg-gradient-to-br font-display
                    ${isActive 
                      ? `${activeColorMap[tree.color]} shadow-lg` 
                      : `${colorMap[tree.color]}`
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? "text-foreground" : "text-foreground/70"}`} />
                    <div className="text-left">
                      <div className={`font-bold ${isActive ? "text-foreground" : "text-foreground/80"}`}>
                        {tree.name}
                      </div>
                      <div className="text-xs text-foreground/50">{tree.description}</div>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active tree display */}
          <div className="relative">
            {trees.map((tree, index) => (
              <SkillTree 
                key={tree.name} 
                tree={tree} 
                isActive={activeTree === index}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-muted to-muted-foreground/30 border border-border" />
              <span className="text-foreground/60">Tier 1 - Basic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-primary/80 to-accent border border-primary/50" />
              <span className="text-foreground/60">Tier 2 - Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-amber-400 to-orange-600 border border-amber-500/50" />
              <span className="text-foreground/60">Tier 3 - Ultimate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
