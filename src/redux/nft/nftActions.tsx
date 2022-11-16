import * as actionTypes from "./nftTypes";

export const item = (value: any) => {
  return {
    type: actionTypes.ITEM,
    payload: value,
  }
}