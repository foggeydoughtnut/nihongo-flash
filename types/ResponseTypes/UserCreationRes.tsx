import BaseResponse from "./BaseResponse";

export default interface UserCreationRes extends BaseResponse {
  data: {
    id: number,
    username: string,
    password: string,
    updatedAt: string,
    createdAt: string,
  }
}