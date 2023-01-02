import { type MonsterType, type WeaponType, type MaterialType, transformItems } from '../common/transform'
import artifactInfoJson from './artifactInfo.json?raw'
import avatarItemJson from './avatarItem.json?raw'
import materialItemJson from './materialItem.json?raw'
import monsterItemJson from './monsterItem.json?raw'
import questItemJson from './questItem.json?raw'
import { route } from './route'
import sceneItemJson from './sceneItem.json?raw'
import weaponItemJson from './weaponItem.json?raw'
import weatherItemJson from './weatherItem.json?raw'

const monsterTypeDict: Record<MonsterType, string> = {
  MONSTER_ORDINARY: 'Monster',
  MONSTER_BOSS: 'Boss',
  MONSTER_ENV_ANIMAL: 'Animal',
  MONSTER_FISH: 'Fish',
  MONSTER_PARTNER: 'Partner'
}

const questTags = ['hidden', 'test', 'unreleased']

const weatherType = ['sunny', 'cloudy', 'rain', 'thunderstorm', 'snow', 'mist']

const itemTags = ['Characters', 'Weapons', 'Material']

const weaponTypeDict: Record<WeaponType, string> = {
  WEAPON_SWORD_ONE_HAND: 'Sword',
  WEAPON_CLAYMORE: 'Claymore',
  WEAPON_POLE: 'Polearm',
  WEAPON_CATALYST: 'Catalyst',
  WEAPON_BOW: 'Bow'
}

const materialTypeDict: Record<MaterialType, string> = {
  undefined: 'Sundry',
  FAKE_ABSORBATE: 'FAKE_ABSORBATE',
  ADSORBATE: 'ADSORBATE',
  CONSUME: 'Consume',
  TALENT: 'Talent',
  AVATAR: 'Avatar',
  CHEST: 'Chest',
  NOTICE_ADD_HP: 'NOTICE_ADD_HP',
  EXCHANGE: 'Exchange',
  WOOD: 'Wood',
  QUEST: 'Quest',
  CRICKET: 'Cricket',
  WIDGET: 'Widget',
  ELEM_CRYSTAL: 'ELEM_CRYSTAL',
  SPICE_FOOD: 'Spice Food',
  ACTIVITY_GEAR: 'ACTIVITY_GEAR',
  ACTIVITY_ROBOT: 'ACTIVITY_ROBOT',
  ACTIVITY_JIGSAW: 'ACTIVITY_JIGSAW',
  FOOD: 'Food',
  EXP_FRUIT: 'EXP_FRUIT',
  WEAPON_EXP_STONE: 'WEAPON_EXP_STONE',
  AVATAR_MATERIAL: 'AVATAR_MATERIAL',
  RELIQUARY_MATERIAL: 'RELIQUARY_MATERIAL',
  CONSUME_BATCH_USE: 'CONSUME_BATCH_USE',
  FISH_BAIT: 'FISH_BAIT',
  CHEST_BATCH_USE: 'CHEST_BATCH_USE',
  SELECTABLE_CHEST: 'SELECTABLE_CHEST',
  HOME_SEED: 'HOME_SEED',
  FLYCLOAK: 'FLYCLOAK',
  BGM: 'Bgm',
  SEA_LAMP: 'SEA_LAMP',
  CHANNELLER_SLAB_BUFF: 'CHANNELLER_SLAB_BUFF',
  FISH_ROD: 'Fish Rod',
  NAMECARD: 'Namecard',
  ARANARA: 'ARANARA',
  DESHRET_MANUAL: 'DESHRET_MANUAL',
  FIREWORKS: 'FIREWORKS',
  COSTUME: 'Costume',
  FURNITURE_SUITE_FORMULA: 'FURNITURE_SUITE_FORMULA',
  FURNITURE_FORMULA: 'FURNITURE_FORMULA',
  RENAME_ITEM: 'RENAME_ITEM',
  GCG_EXCHANGE_ITEM: 'GCG_EXCHANGE_ITEM',
  GCG_CARD: 'GCG_CARD',
  GCG_CARD_FACE: 'GCG_CARD_FACE',
  GCG_CARD_BACK: 'GCG_CARD_BACK',
  GCG_FIELD: 'GCG_FIELD'
}

const items = transformItems({
  artifactInfoJson,
  monsterItemJson,
  monsterTypeDict,
  questItemJson,
  questTags,
  sceneItemJson,
  weatherItemJson,
  weatherType,
  itemTags,
  avatarItemJson,
  weaponItemJson,
  weaponTypeDict,
  materialItemJson,
  materialTypeDict
})

const message: Message = { route, ...items }

export default message
