export interface SkillNode {
  id: string;
  name: string;
  description: string;
  type: "active" | "passive" | "ultimate";
  tier: 1 | 2 | 3;
  icon: string;
  manaCost?: number;
  cooldown?: number;
  damage?: string;
  effects?: string[];
  prerequisites?: string[];
  position: { x: number; y: number };
}

export interface SkillTree {
  name: string;
  description: string;
  color: string;
  skills: SkillNode[];
}

export interface CharacterSkillTrees {
  characterId: string;
  trees: SkillTree[];
}

export const skillTrees: CharacterSkillTrees[] = [
  {
    characterId: "alchemist",
    trees: [
      {
        name: "Arcane",
        description: "Master devastating magical attacks",
        color: "ember-purple",
        skills: [
          { id: "ember-bolt", name: "Ember Bolt", description: "Fires a concentrated bolt of ember energy at enemies.", type: "active", tier: 1, icon: "Flame", manaCost: 10, cooldown: 0, damage: "15-25", position: { x: 50, y: 85 } },
          { id: "ember-lance", name: "Ember Lance", description: "Fires a piercing beam that damages all enemies in a line.", type: "active", tier: 2, icon: "Zap", manaCost: 25, cooldown: 3, damage: "45-65", prerequisites: ["ember-bolt"], position: { x: 30, y: 55 } },
          { id: "inferno", name: "Inferno", description: "Unleashes a massive explosion of fire, devastating all nearby enemies.", type: "active", tier: 2, icon: "Flame", manaCost: 40, cooldown: 8, damage: "80-120", prerequisites: ["ember-bolt"], position: { x: 70, y: 55 } },
          { id: "ember-mastery", name: "Ember Mastery", description: "Increases all magical damage by 15% and mana regeneration by 25%.", type: "passive", tier: 2, icon: "Sparkles", prerequisites: ["ember-bolt"], position: { x: 50, y: 55 } },
          { id: "meteor-storm", name: "Meteor Storm", description: "Calls down a devastating rain of fiery meteors from the sky.", type: "ultimate", tier: 3, icon: "CloudLightning", manaCost: 100, cooldown: 30, damage: "200-350", prerequisites: ["ember-lance", "inferno"], position: { x: 50, y: 20 } },
        ],
      },
      {
        name: "Summoning",
        description: "Command powerful minions",
        color: "ember-green",
        skills: [
          { id: "summon-imp", name: "Summon Imp", description: "Conjures a small fire imp to fight alongside you.", type: "active", tier: 1, icon: "Ghost", manaCost: 20, damage: "8-12 per attack", position: { x: 50, y: 85 } },
          { id: "summon-golem", name: "Summon Golem", description: "Creates an arcane golem with high health and armor.", type: "active", tier: 2, icon: "Shield", manaCost: 50, prerequisites: ["summon-imp"], position: { x: 30, y: 55 } },
          { id: "minion-mastery", name: "Minion Mastery", description: "Your summoned creatures deal 30% more damage.", type: "passive", tier: 2, icon: "Crown", prerequisites: ["summon-imp"], position: { x: 70, y: 55 } },
          { id: "summon-nether", name: "Summon Nether", description: "Conjures a powerful nether creature from another dimension.", type: "ultimate", tier: 3, icon: "Skull", manaCost: 80, damage: "50-80 per attack", prerequisites: ["summon-golem", "minion-mastery"], position: { x: 50, y: 20 } },
        ],
      },
      {
        name: "Defense",
        description: "Protective wards and shields",
        color: "ember-blue",
        skills: [
          { id: "mana-shield", name: "Mana Shield", description: "Creates a barrier that absorbs damage using mana.", type: "active", tier: 1, icon: "Shield", manaCost: 15, effects: ["Absorbs 50 damage"], position: { x: 50, y: 85 } },
          { id: "arcane-armor", name: "Arcane Armor", description: "Permanently increases armor rating by 20%.", type: "passive", tier: 2, icon: "ShieldCheck", prerequisites: ["mana-shield"], position: { x: 30, y: 55 } },
          { id: "reflect-ward", name: "Reflect Ward", description: "Reflects 25% of damage back to attackers.", type: "passive", tier: 2, icon: "RotateCcw", prerequisites: ["mana-shield"], position: { x: 70, y: 55 } },
          { id: "invulnerability", name: "Invulnerability", description: "Become completely immune to damage for 5 seconds.", type: "ultimate", tier: 3, icon: "Star", manaCost: 100, cooldown: 60, prerequisites: ["arcane-armor", "reflect-ward"], position: { x: 50, y: 20 } },
        ],
      },
    ],
  },
  {
    characterId: "vanquisher",
    trees: [
      {
        name: "Marksmanship",
        description: "Deadly ranged attacks",
        color: "ember-yellow",
        skills: [
          { id: "precise-shot", name: "Precise Shot", description: "A carefully aimed shot dealing high damage.", type: "active", tier: 1, icon: "Target", manaCost: 5, damage: "25-35", position: { x: 50, y: 85 } },
          { id: "explosive-shot", name: "Explosive Shot", description: "Fires an arrow that explodes on impact.", type: "active", tier: 2, icon: "Bomb", manaCost: 20, cooldown: 5, damage: "60-90", prerequisites: ["precise-shot"], position: { x: 30, y: 55 } },
          { id: "ricochet", name: "Ricochet", description: "Fires a bullet that bounces between up to 5 enemies.", type: "active", tier: 2, icon: "Shuffle", manaCost: 25, cooldown: 6, damage: "30-45 per hit", prerequisites: ["precise-shot"], position: { x: 70, y: 55 } },
          { id: "critical-mastery", name: "Critical Mastery", description: "Increases critical hit chance by 20%.", type: "passive", tier: 2, icon: "Crosshair", prerequisites: ["precise-shot"], position: { x: 50, y: 55 } },
          { id: "rain-of-arrows", name: "Rain of Arrows", description: "Unleashes a devastating barrage of arrows from above.", type: "ultimate", tier: 3, icon: "CloudRain", manaCost: 60, cooldown: 25, damage: "150-250", prerequisites: ["explosive-shot", "ricochet"], position: { x: 50, y: 20 } },
        ],
      },
      {
        name: "Traps",
        description: "Control the battlefield",
        color: "ember-green",
        skills: [
          { id: "spike-trap", name: "Spike Trap", description: "Deploys a trap that damages enemies who step on it.", type: "active", tier: 1, icon: "Triangle", manaCost: 15, damage: "40-60", position: { x: 50, y: 85 } },
          { id: "flechette-trap", name: "Flechette Trap", description: "Launches deadly flechettes when triggered.", type: "active", tier: 2, icon: "Swords", manaCost: 25, damage: "70-100", prerequisites: ["spike-trap"], position: { x: 30, y: 55 } },
          { id: "poison-cloud", name: "Poison Cloud", description: "Creates a lingering cloud of poison.", type: "active", tier: 2, icon: "Cloud", manaCost: 30, damage: "15 per second", prerequisites: ["spike-trap"], position: { x: 70, y: 55 } },
          { id: "minefield", name: "Minefield", description: "Deploys multiple explosive traps in a large area.", type: "ultimate", tier: 3, icon: "LayoutGrid", manaCost: 70, damage: "200-300 total", prerequisites: ["flechette-trap", "poison-cloud"], position: { x: 50, y: 20 } },
        ],
      },
      {
        name: "Agility",
        description: "Speed and evasion",
        color: "ember-blue",
        skills: [
          { id: "dodge-roll", name: "Dodge Roll", description: "Quickly roll to evade attacks.", type: "active", tier: 1, icon: "ArrowRightLeft", manaCost: 10, cooldown: 3, position: { x: 50, y: 85 } },
          { id: "fleet-foot", name: "Fleet Foot", description: "Permanently increases movement speed by 15%.", type: "passive", tier: 2, icon: "Footprints", prerequisites: ["dodge-roll"], position: { x: 30, y: 55 } },
          { id: "evasion", name: "Evasion", description: "15% chance to completely avoid attacks.", type: "passive", tier: 2, icon: "Wind", prerequisites: ["dodge-roll"], position: { x: 70, y: 55 } },
          { id: "shadow-step", name: "Shadow Step", description: "Instantly teleport behind an enemy and strike.", type: "ultimate", tier: 3, icon: "Sparkles", manaCost: 50, cooldown: 20, damage: "100-150", prerequisites: ["fleet-foot", "evasion"], position: { x: 50, y: 20 } },
        ],
      },
    ],
  },
  {
    characterId: "destroyer",
    trees: [
      {
        name: "Berserker",
        description: "Unleash devastating attacks",
        color: "ember-red",
        skills: [
          { id: "slash-attack", name: "Slash Attack", description: "A powerful sweeping attack hitting all enemies in front.", type: "active", tier: 1, icon: "Swords", manaCost: 5, damage: "20-30", position: { x: 50, y: 85 } },
          { id: "whirlwind", name: "Whirlwind", description: "Spin rapidly, damaging all surrounding enemies.", type: "active", tier: 2, icon: "RotateCw", manaCost: 25, cooldown: 5, damage: "50-70", prerequisites: ["slash-attack"], position: { x: 30, y: 55 } },
          { id: "devastate", name: "Devastate", description: "A massive overhead strike dealing huge damage.", type: "active", tier: 2, icon: "Hammer", manaCost: 30, cooldown: 8, damage: "100-150", prerequisites: ["slash-attack"], position: { x: 70, y: 55 } },
          { id: "bloodlust", name: "Bloodlust", description: "Each kill increases damage by 5% for 10 seconds.", type: "passive", tier: 2, icon: "Heart", prerequisites: ["slash-attack"], position: { x: 50, y: 55 } },
          { id: "berserker-rage", name: "Berserker Rage", description: "Enter a frenzy, doubling attack speed and damage.", type: "ultimate", tier: 3, icon: "Flame", manaCost: 80, cooldown: 45, effects: ["100% attack speed", "100% damage", "Duration: 15s"], prerequisites: ["whirlwind", "devastate"], position: { x: 50, y: 20 } },
        ],
      },
      {
        name: "Titan",
        description: "Crush enemies with might",
        color: "ember-yellow",
        skills: [
          { id: "ground-slam", name: "Ground Slam", description: "Slam the ground, creating a shockwave.", type: "active", tier: 1, icon: "CircleDot", manaCost: 15, damage: "30-45", position: { x: 50, y: 85 } },
          { id: "titan-stomp", name: "Titan Stomp", description: "Stomp the ground, stunning all nearby enemies.", type: "active", tier: 2, icon: "Footprints", manaCost: 25, cooldown: 10, effects: ["2 second stun"], prerequisites: ["ground-slam"], position: { x: 30, y: 55 } },
          { id: "seismic-slam", name: "Seismic Slam", description: "Create a fissure that damages enemies in a line.", type: "active", tier: 2, icon: "Mountain", manaCost: 35, cooldown: 12, damage: "80-120", prerequisites: ["ground-slam"], position: { x: 70, y: 55 } },
          { id: "earthquake", name: "Earthquake", description: "Cause a massive earthquake devastating the entire area.", type: "ultimate", tier: 3, icon: "Activity", manaCost: 100, cooldown: 40, damage: "250-400", prerequisites: ["titan-stomp", "seismic-slam"], position: { x: 50, y: 20 } },
        ],
      },
      {
        name: "Guardian",
        description: "Unyielding defense",
        color: "ember-blue",
        skills: [
          { id: "block", name: "Block", description: "Raise your shield to block incoming attacks.", type: "active", tier: 1, icon: "Shield", manaCost: 5, effects: ["Block 80% damage"], position: { x: 50, y: 85 } },
          { id: "hardened-skin", name: "Hardened Skin", description: "Reduces all physical damage taken by 20%.", type: "passive", tier: 2, icon: "ShieldCheck", prerequisites: ["block"], position: { x: 30, y: 55 } },
          { id: "retaliation", name: "Retaliation", description: "When hit, 30% chance to counter attack.", type: "passive", tier: 2, icon: "Swords", prerequisites: ["block"], position: { x: 70, y: 55 } },
          { id: "unstoppable", name: "Unstoppable", description: "Become immune to stuns and reduce damage by 50% for 10 seconds.", type: "ultimate", tier: 3, icon: "Crown", manaCost: 60, cooldown: 45, prerequisites: ["hardened-skin", "retaliation"], position: { x: 50, y: 20 } },
        ],
      },
    ],
  },
];

export function getSkillTreesByCharacter(characterId: string): SkillTree[] | undefined {
  return skillTrees.find((st) => st.characterId === characterId)?.trees;
}
