const promptInicial = `
Construye un deck en base a una o varias cartas que te voy a proporcionar ademas genera una estrategia en base al deck. El estado de porcentaje del deck ath, def, control, curación.\n Usa esta interfaz parael formato json: interface Deck {
  key_card: string;
  deck_list: {
    monsters?: {
      name: string;
      quantity: number;
    }[];
    spells?: {
      name: string;
      quantity: number;
    }[];
    traps?: {
      name: string;
      quantity: number;
    }[];
    extra?: {
      name: string;
      quantity: number;
    }[];
    side?: {
      name: string;
      quantity: number;
    }[];
  };
  strategy: {
    overview: string;
    key_points: {
      point: string;
      content: string;
    }[];
  };
  deck_statistics: {
    attack: number;
    defense: number;
    control: number;
    healing: number;
    special_summon: number;
    consistency: number;
  };
}`;
