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
  MONSTER_ORDINARY: '怪物',
  MONSTER_BOSS: '首领',
  MONSTER_ENV_ANIMAL: '动物',
  MONSTER_FISH: '鱼',
  MONSTER_PARTNER: '友军'
}

const questTags = ['隐藏', '测试', '未发布']

const weatherType = ['晴天', '多云', '雨天', '雷雨', '雪天', '多雾']

const itemTags = ['角色', '武器', '材料']

const weaponTypeDict: Record<WeaponType, string> = {
  WEAPON_SWORD_ONE_HAND: '单手剑',
  WEAPON_CLAYMORE: '双手剑',
  WEAPON_POLE: '长柄武器',
  WEAPON_CATALYST: '法器',
  WEAPON_BOW: '弓'
}

const materialTypeDict: Record<MaterialType, string> = {
  undefined: '杂项',
  FAKE_ABSORBATE: 'FAKE_ABSORBATE',
  ADSORBATE: 'ADSORBATE',
  CONSUME: '消耗品',
  TALENT: '命星',
  AVATAR: '角色',
  CHEST: '宝箱',
  NOTICE_ADD_HP: '烹饪',
  EXCHANGE: 'EXCHANGE',
  WOOD: '木材',
  QUEST: '任务',
  CRICKET: 'CRICKET',
  WIDGET: '小道具',
  ELEM_CRYSTAL: '神瞳',
  SPICE_FOOD: 'SPICE_FOOD',
  ACTIVITY_GEAR: 'ACTIVITY_GEAR',
  ACTIVITY_ROBOT: 'ACTIVITY_ROBOT',
  ACTIVITY_JIGSAW: 'ACTIVITY_JIGSAW',
  FOOD: '食物',
  EXP_FRUIT: '经验',
  WEAPON_EXP_STONE: '矿',
  AVATAR_MATERIAL: '角色材料',
  RELIQUARY_MATERIAL: 'RELIQUARY_MATERIAL',
  CONSUME_BATCH_USE: '树脂',
  FISH_BAIT: '鱼饵',
  CHEST_BATCH_USE: 'CHEST_BATCH_USE',
  SELECTABLE_CHEST: 'SELECTABLE_CHEST',
  HOME_SEED: '种子',
  FLYCLOAK: '翅膀',
  BGM: '音乐',
  SEA_LAMP: 'SEA_LAMP',
  CHANNELLER_SLAB_BUFF: 'CHANNELLER_SLAB_BUFF',
  FISH_ROD: '钓竿',
  NAMECARD: '名片',
  ARANARA: 'ARANARA',
  DESHRET_MANUAL: 'DESHRET_MANUAL',
  FIREWORKS: 'FIREWORKS',
  COSTUME: '衣装',
  FURNITURE_SUITE_FORMULA: '摆设套装',
  FURNITURE_FORMULA: '摆设',
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
