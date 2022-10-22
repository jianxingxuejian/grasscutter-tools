import { artifactIds } from '../common/artifactIds'

export const artifactInfo: Message['artifactInfo'] = [
  {
    name: 'Deepwood Memories',
    description1: 'Dendro DMG Bonus +15%.',
    description2:
      'After Elemental Skills or Bursts hit opponents, the targets Dendro RES will be decreased by 30% for 8s. This effect can be triggered even if the equipping character is not on the field.'
  },
  {
    name: 'Gilded Dreams',
    description1: 'Elemental Mastery +80.',
    description2:
      'Within 8s of triggering an Elemental Reaction, the character equipping this will obtain buffs based on the Elemental Type of the other party members. ATK is increased by 14% for each party member whose Elemental Type is the same as the equipping character, and Elemental Mastery is increased by 50 for every party member with a different Elemental Type. Each of the aforementioned buffs will count up to 3 characters. This effect can be triggered once every 8s. The character who equips this can still trigger its effects when not on the field.'
  },
  {
    name: 'Vermillion Hereafter',
    description1: 'ATK +18%.',
    description2:
      'After using an Elemental Burst, this character will gain the Nascent Light effect, increasing their ATK by 8% for 16s. When the characters HP decreases, their ATK will further increase by 10%. This further increase can occur this way a maximum of 4 times. This effect can be triggered once every 0.8s. Nascent Light will be dispelled when the character leaves the field. If an Elemental Burst is used again during the duration of Nascent Light, the original Nascent Light will be dispelled.'
  },
  {
    name: 'Echoes of an Offering',
    description1: 'ATK +18%.',
    description2:
      'When Normal Attacks hit opponents, there is a 36% chance that it will trigger Valley Rite, which will increase Normal Attack DMG by 70% of ATK. This effect will be dispelled 0.05s after a Normal Attack deals DMG. If a Normal Attack fails to trigger Valley Rite, the odds of it triggering the next time will increase by 20%. This trigger can occur once every 0.2s.'
  },
  {
    name: 'Husk of Opulent Dreams',
    description1: 'DEF +30%',
    description2:
      'A character equipped with this Artifact set will obtain the Curiosity effect in the following conditions: When on the field, the character gains 1 stack after hitting an opponent with a Geo attack, triggering a maximum of once every 0.3s. When off the field, the character gains 1 stack every 3s. Curiosity can stack up to 4 times, each providing 6% DEF and a 6% Geo DMG Bonus. When 6 seconds pass without gaining a Curiosity stack, 1 stack is lost.'
  },
  {
    name: 'Ocean-Hued Clam',
    description1: 'Healing Bonus +15%.',
    description2:
      'When the character equipping this artifact set heals a character in the party, a Sea-Dyed Foam will appear for 3 seconds, accumulating the amount of HP recovered from healing (including overflow healing). At the end of the duration, the Sea-Dyed Foam will explode, dealing DMG to nearby opponents based on 90% of the accumulated healing. (This DMG is calculated similarly to Reactions such as Electro-Charged, and Superconduct, but is not affected by Elemental Mastery, Character Levels, or Reaction DMG Bonuses). Only one Sea-Dyed Foam can be produced every 3.5 seconds. Each Sea-Dyed Foam can accumulate up to 30,000 HP (including overflow healing). There can be no more than one Sea-Dyed Foam active at any given time. This effect can still be triggered even when the character who is using this artifact set is not on the field.'
  },
  {
    name: 'Emblem of Severed Fate',
    description1: 'Energy Recharge +20%',
    description2: 'Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way.'
  },
  {
    name: 'Shimenawas Reminiscence',
    description1: 'ATK +18%.',
    description2:
      'When casting an Elemental Skill, if the character has 15 or more Energy, they lose 15 Energy and Normal/Charged/Plunging Attack DMG is increased by 50% for 10s. This effect will not trigger again during that duration.'
  },
  {
    name: 'Tenacity of the Millelith',
    description1: 'HP increased by 20%.',
    description2:
      'When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.'
  },
  {
    name: 'Pale Flame',
    description1: 'Physical DMG is increased by 25%.',
    description2:
      'When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.'
  },
  {
    name: 'Thundersoother',
    description1: 'Electro RES increased by 40%.',
    description2: 'Increases DMG against opponents affected by Electro by 35%.'
  },
  {
    name: 'Crimson Witch of Flames',
    description1: 'Pyro DMG Bonus +15%',
    description2:
      'Increases Overloaded and Burning, and Burgeon DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting value for 10s. Max 3 stacks.'
  },
  {
    name: 'Wanderers Troupe',
    description1: 'Increases Elemental Mastery by 80.',
    description2: 'Increases Charged Attack DMG by 35% if the character uses a Catalyst or a Bow.'
  },
  {
    name: 'Bloodstained Chivalry',
    description1: 'Physical DMG +25%',
    description2: 'After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s.'
  },
  {
    name: 'Maiden Beloved',
    description1: 'Character Healing Effectiveness +15%',
    description2: 'Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.'
  },
  {
    name: 'Gladiators Finale',
    description1: 'ATK +18%.',
    description2: 'If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.'
  },
  {
    name: 'Lavawalker',
    description1: 'Pyro RES increased by 40%.',
    description2: 'Increases DMG against opponents affected by Pyro by 35%.'
  },
  {
    name: 'Archaic Petra',
    description1: 'Gain a 15% Geo DMG Bonus.',
    description2:
      'Upon obtaining an Elemental Shard created through a Crystallize Reaction, all party members gain a 35% DMG Bonus for that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time.'
  },
  {
    name: 'Thundering Fury',
    description1: 'Electro DMG Bonus +15%',
    description2:
      'Increases DMG caused by Overloaded, Electro-Charged, Superconduct, and Hyperbloom by 40%, and the DMG Bonus conferred by Aggravate is increased by 20%. When Quicken or the aforementioned Elemental Reactions are triggered, Elemental Skill CD is decreased by 1s. Can only occur once every 0.8s.'
  },
  {
    name: 'Heart of Depth',
    description1: 'Hydro DMG Bonus +15%',
    description2: 'After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s.'
  },
  {
    name: 'Retracing Bolide',
    description1: 'Increases Shield Strength by 35%.',
    description2: 'While protected by a shield, gain an additional 40% Normal and Charged Attack DMG.'
  },
  {
    name: 'Noblesse Oblige',
    description1: 'Elemental Burst DMG +20%',
    description2: 'Using an Elemental Burst increases all party members ATK by 20% for 12s. This effect cannot stack.'
  },
  {
    name: 'Viridescent Venerer',
    description1: 'Anemo DMG Bonus +15%',
    description2: 'Increases Swirl DMG by 60%. Decreases opponents Elemental RES to the element infused in the Swirl by 40% for 10s.'
  },
  {
    name: 'Blizzard Strayer',
    description1: 'Cryo DMG Bonus +15%',
    description2:
      'When a character attacks an opponent affected by Cryo, their CRIT Rate is increased by 20%. If the opponent is Frozen, CRIT Rate is increased by an additional 20%.'
  }
].map((item, index) => ({ ...item, ...artifactIds[index] }))
