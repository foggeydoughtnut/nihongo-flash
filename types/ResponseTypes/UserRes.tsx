import BaseResponse from "./BaseResponse";

export default interface UserRes extends BaseResponse {
  data: {
    id: number,
    username: string,
  }
}
