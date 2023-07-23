import BaseResponse from "./BaseResponse";

export default interface DeckInfoRes extends BaseResponse {
  data: {
    new: number,
    review: number,
    inProgress: number,
  }
}