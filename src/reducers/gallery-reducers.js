import {
  ADD_ITEM,
} from "../actions/gallery-actions";

export default function galleryReducer(state = {}, {type, payload}) {
  console.log("galleryReducer", state.items);
  
  switch (type) {
    case ADD_ITEM:
      const updatedDeleteList = state.items.concat(payload.image);
      console.log("case ADD_ITEM", state);
      return {
        ...state,
        items: updatedDeleteList
      };
    default:
      return state;
  }
}
