import { useState } from "react";
import { SkillTree as SkillTreeType } from "@/data/skillTrees";
import { SkillNode } from "./SkillNode";

interface SkillTreeProps {
  tree: SkillTreeType;
  isActive: boolean;
}

const colorMap: Record<string, string> = {
  "ember-red": "hsl(10, 80%, 55%)",
  "ember-green": "hsl(140, 60%, 45%)",
  "ember-blue": "hsl(200, 80%, 50%)",
  "ember-yellow": "hsl(45, 90%, 55%)",
  "ember-purple": "hsl(280, 60%, 50%)",
};

export function SkillTree({ tree, isActive }: SkillTreeProps) {
  const [unlockedSkills] = useState<string[]>(() => 
    tree.skills.filter(s => s.tier === 1).map(s => s.id)
  );

  // Generate connection lines between skills
  const renderConnections = () => {
    const connections: JSX.Element[] = [];
    
    tree.skills.forEach((skill) => {
      if (skill.prerequisites) {
        skill.prerequisites.forEach((prereqId) => {
          const prereq = tree.skills.find((s) => s.id === prereqId);
          if (prereq) {
            const isUnlocked = unlockedSkills.includes(skill.id);
            connections.push(
              <line
                key={`${prereqId}-${skill.id}`}
                x1={`${prereq.position.x}%`}
                y1={`${prereq.position.y}%`}
                x2={`${skill.position.x}%`}
                y2={`${skill.position.y}%`}
                stroke={isUnlocked ? colorMap[tree.color] || "hsl(30, 85%, 50%)" : "hsl(30, 20%, 25%)"}
                strokeWidth="2"
                strokeDasharray={isUnlocked ? "0" : "4 4"}
                className="transition-all duration-300"
              />
            );
          }
        });
      }
    });
    
    return connections;
  };

  if (!isActive) return null;

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-b from-card/50 to-background/50 rounded-2xl border border-border/30 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${colorMap[tree.color]} 1px, transparent 0)`,
          backgroundSize: "30px 30px"
        }} />
      </div>
      
      {/* Tier labels */}
      <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-around text-xs text-foreground/40 font-display uppercase tracking-wider">
        <span className="transform -rotate-90">Tier 3</span>
        <span className="transform -rotate-90">Tier 2</span>
        <span className="transform -rotate-90">Tier 1</span>
      </div>
      
      {/* Tree content */}
      <div className="relative w-full h-full pl-8">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {renderConnections()}
        </svg>
        
        {/* Skill nodes */}
        {tree.skills.map((skill) => (
          <SkillNode
            key={skill.id}
            skill={skill}
            isUnlocked={unlockedSkills.includes(skill.id)}
            colorClass={tree.color}
          />
        ))}
      </div>
      
      {/* Glow effect at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${colorMap[tree.color]}15, transparent)`
        }}
      />
    </div>
  );
}
