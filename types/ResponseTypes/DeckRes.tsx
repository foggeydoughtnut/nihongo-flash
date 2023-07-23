import Deck from "types/Deck";
import BaseResponse from "./BaseResponse";

export default interface DeckRes extends BaseResponse {
  data: Deck[]
}