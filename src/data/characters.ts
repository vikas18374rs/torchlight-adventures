import alchemistImg from "@/assets/alchemist.png";
import vanquisherImg from "@/assets/vanquisher.png";
import destroyerImg from "@/assets/destroyer.png";

export interface Skill {
  name: string;
  description: string;
  type: "active" | "passive";
}

export interface Character {
  id: string;
  name: string;
  image: string;
  description: string;
  tagline: string;
  role: string;
  playstyle: string;
  lore: string;
  skills: Skill[];
  stats: {
    strength: number;
    magic: number;
    dexterity: number;
    defense: number;
  };
}

export const characters: Character[] = [
  {
    id: "alchemist",
    name: "Alchemist",
    image: alchemistImg,
    description: "The Alchemist did not necessarily come to Torchlight for adventure and heroism. Ember is a cornerstone of his magical art, and the beleaguered town sits atop the largest cache of this magical mineral ever found. By channeling the power of Ember, the Alchemist is able to dispatch enemies from afar as well as summon minions to his aid.",
    tagline: "Will the power of Ember be the tool of his triumph or cause of his doom?",
    role: "Ranged Spellcaster",
    playstyle: "The Alchemist excels at dealing devastating magical damage from a distance. Use powerful spells to obliterate groups of enemies while your summoned minions draw their attention.",
    lore: "Once a renowned scholar at the prestigious Academy of Arcane Arts, the Alchemist became obsessed with the mystical properties of Ember after reading ancient texts describing its limitless potential. His pursuit of knowledge led him to abandon his comfortable life and venture into the dangerous depths beneath Torchlight.",
    skills: [
      { name: "Ember Lance", description: "Fires a concentrated beam of ember energy that pierces through enemies.", type: "active" },
      { name: "Summon Golem", description: "Conjures an arcane golem to fight alongside you.", type: "active" },
      { name: "Inferno", description: "Unleashes a devastating explosion of fire, damaging all nearby enemies.", type: "active" },
      { name: "Ember Mastery", description: "Increases all magical damage and mana regeneration.", type: "passive" },
      { name: "Arcane Shield", description: "Surrounds you with a protective barrier that absorbs damage.", type: "active" },
    ],
    stats: { strength: 30, magic: 95, dexterity: 50, defense: 40 },
  },
  {
    id: "vanquisher",
    name: "Vanquisher",
    image: vanquisherImg,
    description: "Part of an ancient order dedicated to justice and bringing balance to the world, the Vanquisher was dispatched to Torchlight to investigate the mysterious slayings and missing townsfolk. In combat, the Vanquisher can pick off enemies from afar, or use traps to confuse and debilitate her foes from all directions.",
    tagline: "Cut off from the support of her order, the dark power of Ember will test the Vanquisher's skill and conviction to the fullest.",
    role: "Ranged Hunter",
    playstyle: "The Vanquisher is a master of precision and tactical combat. Use ranged weapons to eliminate threats before they get close, and deploy traps to control the battlefield.",
    lore: "The Order of the Vanquishers has protected the realm for centuries, their members trained from childhood in the arts of combat and tracking. When reports of dark corruption reached the Order's grand temple, they sent their most skilled agent to investigate—unaware of the horrors that awaited in Torchlight's depths.",
    skills: [
      { name: "Explosive Shot", description: "Fires an arrow that explodes on impact, damaging nearby enemies.", type: "active" },
      { name: "Flechette Trap", description: "Deploys a trap that launches deadly flechettes when triggered.", type: "active" },
      { name: "Ricochet", description: "Fires a bullet that bounces between multiple enemies.", type: "active" },
      { name: "Critical Strikes", description: "Increases your chance to deal critical damage.", type: "passive" },
      { name: "Venomous Dirks", description: "Throws poisoned daggers that deal damage over time.", type: "active" },
    ],
    stats: { strength: 50, magic: 40, dexterity: 90, defense: 45 },
  },
  {
    id: "destroyer",
    name: "Destroyer",
    image: destroyerImg,
    description: "For an endless wanderer drawn to conflict with his dual-wielding blades, the chance to battle evil in Torchlight proved irresistible. Channeling the warrior spirits of his ancestors, the Destroyer excels at close-quarter combat, easily overwhelming multiple enemies at once with his speed and ferocity.",
    tagline: "With the darkness rising to cloud the Destroyer's judgment, only time will tell if his mighty heart can resist Ember's corruption.",
    role: "Melee Warrior",
    playstyle: "The Destroyer charges into battle head-first, dealing massive damage to everything in his path. Use powerful melee attacks to cleave through hordes of enemies while shrugging off their counterattacks.",
    lore: "Born into a nomadic tribe of fierce warriors, the Destroyer was raised to embrace battle as a sacred rite. When his tribe was decimated by corrupted creatures, he swore vengeance upon the darkness. His journey eventually led him to Torchlight, where the source of corruption runs deepest.",
    skills: [
      { name: "Slash Attack", description: "A powerful sweeping attack that damages all enemies in front of you.", type: "active" },
      { name: "Titan Stomp", description: "Slams the ground, stunning nearby enemies.", type: "active" },
      { name: "Berserker Rage", description: "Enters a frenzy, greatly increasing attack speed and damage.", type: "active" },
      { name: "Devastate", description: "A devastating overhead strike that deals massive single-target damage.", type: "active" },
      { name: "Hardened Skin", description: "Reduces all physical damage taken.", type: "passive" },
    ],
    stats: { strength: 95, magic: 20, dexterity: 45, defense: 80 },
  },
];

export function getCharacterById(id: string): Character | undefined {
  return characters.find((char) => char.id === id);
}
