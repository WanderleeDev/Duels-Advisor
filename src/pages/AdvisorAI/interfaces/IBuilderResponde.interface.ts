interface Deck {
  key_card: string;
  deck_list: Partial<IDeckList>;
  strategy: IDeckStrategy;
  deck_statistics: Partial<IDeckStatistics>;
}

interface ICardResponse {
  name: string;
  quantity: number;
}

interface IStrategyPoint {
  point: string;
  content: string;
}

interface IDeckStrategy {
  overview: string;
  key_points: IStrategyPoint[];
}

interface IDeckList {
  monsters: ICardResponse[];
  spells: ICardResponse[];
  traps: ICardResponse[];
  extra: ICardResponse[];
  side: ICardResponse[];
}

interface IDeckStatistics {
  attack: number;
  defense: number;
  control: number;
  healing: number;
  special_summon: number;
  consistency: number;
}


// interface ISpellTrapCard extends ICardResponse {
//   type: "spell" | "trap";
// }

// interface IMonsterCard extends ICardResponse {
//   level: number;
// }

// interface ILinkCArd extends ICardResponse {
//   linkVal: string;
// }

// interface IXyzCard extends ICardResponse {
//   range: number;
// }

// interface IPendulumCard extends ICardResponse {
//   scale: number;
// }
