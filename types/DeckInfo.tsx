import Deck from "./Deck";

export default interface DeckInfo extends Deck {
  new: number,
  review: number,
  inProgress: number  
};
