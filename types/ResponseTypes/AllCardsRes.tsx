import Card from "types/Card";
import BaseResponse from "./BaseResponse";

export default interface AllCardsRes extends BaseResponse {
  data: Card[],
}