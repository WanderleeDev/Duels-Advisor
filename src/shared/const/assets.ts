import DARK from "/public/images/attributes/DARK.png";
import DIVINE from "/public/images/attributes/DIVINE.png";
import EARTH from "/public/images/attributes/EARTH.png";
import FIRE from "/public/images/attributes/FIRE.png";
import LAUGH from "/public/images/attributes/LAUGH.png";
import LIGHT from "/public/images/attributes/LIGHT.png";
import WATER from "/public/images/attributes/WATER.png";
import WIND from "/public/images/attributes/WIND.png";
import SPELL_CARD from "/public/images/attributes/SPELL.svg";
import TRAP_CARD from "/public/images/attributes/TRAP.svg";
import aqua from "/public/images/cards-types/Aqua.webp";
import beastWarrior from "/public/images/cards-types/Beast-Warrior.webp";
import beast from "/public/images/cards-types/Beast.webp";
import creatorGod from "/public/images/cards-types/Creator-God.webp";
import cyberse from "/public/images/cards-types/Cyberse.webp";
import dinosaur from "/public/images/cards-types/Dinosaur.webp";
import divineBeast from "/public/images/cards-types/Divine-Beast.webp";
import dragon from "/public/images/cards-types/Dragon.webp";
import fairy from "/public/images/cards-types/Fairy.webp";
import fiend from "/public/images/cards-types/Fiend.webp";
import fish from "/public/images/cards-types/Fish.webp";
import insect from "/public/images/cards-types/Insect.webp";
import machine from "/public/images/cards-types/Machine.webp";
import plant from "/public/images/cards-types/Plant.webp";
import psychic from "/public/images/cards-types/Psychic.webp";
import pyro from "/public/images/cards-types/Pyro.webp";
import reptile from "/public/images/cards-types/Reptile.webp";
import rock from "/public/images/cards-types/Rock.webp";
import seaSerpent from "/public/images/cards-types/Sea-Serpent.webp";
import spellcaster from "/public/images/cards-types/Spellcaster.webp";
import thunder from "/public/images/cards-types/Thunder.webp";
import warrior from "/public/images/cards-types/Warrior.webp";
import wingedBeast from "/public/images/cards-types/Winged-Beast.webp";
import wyrm from "/public/images/cards-types/Wyrm.webp";
import zombie from "/public/images/cards-types/Zombie.webp";
import continuous from "/public/images/cards-types/Continuous.webp";
import counter from "/public/images/cards-types/Counter.webp";
import equip from "/public/images/cards-types/Equip.webp";
import field from "/public/images/cards-types/Field.webp";
import normalc from "/public/images/cards-types/Normal.webp";
import quickPlay from "/public/images/cards-types/Quick-Play.webp";
import ritualc from "/public/images/cards-types/Ritual.webp";
import effect from "/public/images/cards-template/effect-card.webp";
import fusion from "/public/images/cards-template/fusion-card.webp";
import link from "/public/images/cards-template/link-card..webp";
import magic from "/public/images/cards-template/magic-card.webp";
import normal from "/public/images/cards-template/normal-card.webp";
import pendulumEffect from "/public/images/cards-template/pendulum-effect-card.webp";
import pendulumFusion from "/public/images/cards-template/pendulum-fusion-card.webp";
import pendulumLink from "/public/images/cards-template/pendulum-link-card.webp";
import pendulum from "/public/images/cards-template/pendulum-normal-card.webp";
import pendulumRitual from "/public/images/cards-template/pendulum-ritual-card.webp";
import pendulumSynchro from "/public/images/cards-template/pendulum-synchro-card.webp";
import pendulumXyz from "/public/images/cards-template/pendulum-xyz-card.webp";
import ritual from "/public/images/cards-template/ritual-card.webp";
import synchro from "/public/images/cards-template/synchro-card.webp";
import trap from "/public/images/cards-template/trap-card.webp";
import xyz from "/public/images/cards-template/xyz-card.webp";
import atk from "/public/images/icons/atk.svg";
import def from "/public/images/icons/def.svg";
import limit1 from "/public/images/icons/limit1.svg";
import limit2 from "/public/images/icons/limit2.svg";
import limit3 from "/public/images/icons/limit3.svg";
import level from "/public/images/attributes/Star.png";
import scale from "/public/images/icons/scale.webp";
import linkVal from "/public/images/icons/link.webp";

export const cardTypeIcons: Record<string, string> = {
  effect: effect,
  fusion: fusion,
  link: link,
  spell: magic,
  normal: normal,
  effect_pendulum: pendulumEffect,
  "pendulum Fusion": pendulumFusion,
  "pendulum Link": pendulumLink,
  pendulum: pendulum,
  "pendulum Ritual": pendulumRitual,
  "pendulum Synchro": pendulumSynchro,
  "pendulum Xyz": pendulumXyz,
  ritual: ritual,
  synchro: synchro,
  trap: trap,
  xyz: xyz,
} as const;

export const monsterTypeIcon: Record<string, string> = {
  aqua,
  beastWarrior,
  beast,
  creatorGod,
  cyberse,
  dinosaur,
  divineBeast,
  dragon,
  fairy,
  fiend,
  fish,
  insect,
  machine,
  plant,
  psychic,
  pyro,
  reptile,
  rock,
  seaSerpent,
  spellcaster,
  thunder,
  warrior,
  wingedBeast,
  wyrm,
  zombie,
  continuous,
  counter,
  equip,
  field,
  normalc,
  "quick-play": quickPlay,
  ritualc,
} as const;

export const attributeIcons: Record<string, string> = {
  dark: DARK,
  divine: DIVINE,
  earth: EARTH,
  fire: FIRE,
  laugh: LAUGH,
  light: LIGHT,
  water: WATER,
  wind: WIND,
  spell_card: SPELL_CARD,
  trap_card: TRAP_CARD,
} as const;

export const extraIcons: Record<string, string> = {
  atk,
  def,
  limit1,
  limit2,
  limit3,
  level,
  scale,
  linkval: linkVal,
} as const;
