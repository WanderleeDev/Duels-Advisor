export interface ICardDbState {
  cards: ICardData[];
  offset: number;
  num: number;
}

export interface IResCardData {
  data: ICardData[];
  meta: Meta;
}

export interface IResCardDataById {
  data: ICardData[];
}

export interface ICardData {
  archetype: string;
  card_images: ICardImage[];
  card_prices: ICardPrice[];
  card_sets: ICardSet[];
  banlist_info?: IBanListInfo;
  desc: string;
  frameType: string;
  id: number;
  name: string;
  race: string;
  type: string;
  atk?: number;
  def?: number;
  level?: number;
  linkval?: number;
  scale?: number;
  linkmarkers?: string[];
  attribute?: string;
  ygoprodeck_url: string;
  pend_desc?: string;
  monster_desc?: string;
}

export interface ICardImage {
  id: number;
  image_url: string;
  image_url_cropped: string;
  image_url_small: string;
}

export interface ICardPrice {
  amazon_price: string;
  cardmarket_price: string;
  coolstuffinc_price: string;
  ebay_price: string;
  tcgplayer_price: string;
}

export interface IBanListInfo {
  ban_goat: string;
}

export interface ICardSet {
  set_code: string;
  set_name: string;
  set_price: string;
  set_rarity: string;
  set_rarity_code: string;
}

export interface Meta {
  current_rows: number;
  next_page: string;
  next_page_offset: number;
  pages_remaining: number;
  rows_remaining: number;
  total_pages: number;
  total_rows: number;
}
