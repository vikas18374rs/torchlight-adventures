import { useState } from "react";
import { 
  Circle, Lock, Swords, Droplet, Clock, Sparkles, Flame, Zap, 
  CloudLightning, Ghost, Shield, Crown, Skull, ShieldCheck, RotateCcw, 
  Star, Target, Bomb, Shuffle, Crosshair, CloudRain, Triangle, Cloud, 
  LayoutGrid, ArrowRightLeft, Footprints, Wind, RotateCw, Hammer, 
  Heart, CircleDot, Mountain, Activity, LucideIcon
} from "lucide-react";
import { SkillNode as SkillNodeType } from "@/data/skillTrees";

const iconMap: Record<string, LucideIcon> = {
  Flame, Zap, Sparkles, CloudLightning, Ghost, Shield, Crown, Skull,
  ShieldCheck, RotateCcw, Star, Target, Bomb, Shuffle, Crosshair,
  CloudRain, Triangle, Cloud, LayoutGrid, ArrowRightLeft, Footprints,
  Wind, RotateCw, Hammer, Heart, CircleDot, Mountain, Activity, Swords, Circle
};

interface SkillNodeProps {
  skill: SkillNodeType;
  isUnlocked: boolean;
  colorClass: string;
}

export function SkillNode({ skill, isUnlocked, colorClass }: SkillNodeProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const IconComponent = iconMap[skill.icon] || Circle;
  const tierColors = {
    1: "from-muted to-muted-foreground/30",
    2: "from-primary/80 to-accent",
    3: "from-amber-400 to-orange-600",
  };
  
  const tierGlow = {
    1: "",
    2: "shadow-lg shadow-primary/30",
    3: "shadow-xl shadow-amber-500/50",
  };

  const typeLabels = {
    active: { label: "Active", color: "bg-primary/20 text-primary" },
    passive: { label: "Passive", color: "bg-ember-green/20 text-[hsl(var(--ember-green))]" },
    ultimate: { label: "Ultimate", color: "bg-amber-500/20 text-amber-400" },
  };

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
      style={{ left: `${skill.position.x}%`, top: `${skill.position.y}%` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Node */}
      <div
        className={`
          relative w-14 h-14 rounded-xl cursor-pointer transition-all duration-300
          ${isUnlocked ? `bg-gradient-to-br ${tierColors[skill.tier]} ${tierGlow[skill.tier]}` : "bg-muted/50"}
          ${isUnlocked ? "border-2 border-primary/50" : "border border-border/50"}
          ${isHovered ? "scale-110" : "scale-100"}
          flex items-center justify-center group
        `}
      >
        {/* Tier 3 special glow effect */}
        {skill.tier === 3 && isUnlocked && (
          <div className="absolute inset-0 rounded-xl animate-pulse-glow" />
        )}
        
        <IconComponent 
          className={`w-7 h-7 ${isUnlocked ? "text-foreground" : "text-foreground/30"} transition-colors`}
        />
        
        {/* Lock indicator */}
        {!isUnlocked && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-background rounded-full flex items-center justify-center border border-border">
            <Lock className="w-2.5 h-2.5 text-foreground/40" />
          </div>
        )}
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-50 w-64 animate-fade-in">
          <div className="bg-card border border-border rounded-lg p-4 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-display font-bold text-foreground">{skill.name}</h4>
              <span className={`text-xs px-2 py-0.5 rounded-full ${typeLabels[skill.type].color}`}>
                {typeLabels[skill.type].label}
              </span>
            </div>
            
            {/* Description */}
            <p className="text-sm text-foreground/70 mb-3">{skill.description}</p>
            
            {/* Stats */}
            <div className="space-y-1.5 text-xs">
              {skill.damage && (
                <div className="flex items-center gap-2 text-ember-red">
                  <Swords className="w-3.5 h-3.5" />
                  <span>Damage: {skill.damage}</span>
                </div>
              )}
              {skill.manaCost !== undefined && (
                <div className="flex items-center gap-2 text-ember-blue">
                  <Droplet className="w-3.5 h-3.5" />
                  <span>Mana: {skill.manaCost}</span>
                </div>
              )}
              {skill.cooldown !== undefined && skill.cooldown > 0 && (
                <div className="flex items-center gap-2 text-foreground/60">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Cooldown: {skill.cooldown}s</span>
                </div>
              )}
              {skill.effects && skill.effects.map((effect, i) => (
                <div key={i} className="flex items-center gap-2 text-ember-green">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{effect}</span>
                </div>
              ))}
            </div>
            
            {/* Tier indicator */}
            <div className="mt-3 pt-2 border-t border-border/50 flex items-center justify-between">
              <span className="text-xs text-foreground/50">Tier {skill.tier}</span>
              {skill.prerequisites && skill.prerequisites.length > 0 && (
                <span className="text-xs text-foreground/40">
                  Requires: {skill.prerequisites.length} skill{skill.prerequisites.length > 1 ? "s" : ""}
                </span>
              )}
            </div>
          </div>
          
          {/* Arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-3 h-3 bg-card border-r border-b border-border rotate-45 -mt-1.5" />
        </div>
      )}
    </div>
  );
}
