import * as actionTypes from "./nftTypes";

const nftReducer = (state: any, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case actionTypes.ITEM:
      return {
        ...state,
        item: action.payload,
      }
    default:
      return state;
  }
}

export default nftReducer;