export const  ADD_ITEM = "gallery:addItem";

export const addItem = image => ({
  type: ADD_ITEM,
  payload: {
    image
  }
});
