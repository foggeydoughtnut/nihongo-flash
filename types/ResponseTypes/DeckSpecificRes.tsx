import Deck from "types/Deck";
import BaseResponse from "./BaseResponse";

export default interface DeckSpecificRes extends BaseResponse {
  data: Deck
}