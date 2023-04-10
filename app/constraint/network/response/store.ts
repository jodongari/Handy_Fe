import { StoreStatus } from "../../enums/enums";

export interface StoreEntity {
  storeSeq: string,
  name: string,
  introduction: string,
  status: StoreStatus
}
