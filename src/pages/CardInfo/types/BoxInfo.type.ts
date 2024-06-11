import { ICardData } from "../../../redux/models/cardDB.model";

export type BoxInfoType = Omit<
  ICardData,
  "desc" | "card_sets" | "card_prices" | "name" | "card_images"
>;
