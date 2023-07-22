import BaseResponse from "./BaseResponse";

export default interface LoginRes extends BaseResponse {
  data: {
    token: string,
  }
}