import {
  ADD_ROOT_DATA,
  UPDATE_SEARCH_KEY,
  UPDATE_PAGE_NUMBER,
  WRITE_CAMPAIGN_ID,
  CLEAR_CAMPAIGN_ID,
  REMOVE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  ADD_TO_DELETE_ARRAY,
  REMOVE_FROM_DELETE_ARRAY,
  ADD_AUTH_USER_DATA
} from "../actions/campaign-actions";

export default function campaignReducer(state = {}, {type, payload}) {
  switch (type) {
    case ADD_ROOT_DATA:
      console.log("case ADD_ROOT_DATA", state);
      return {
        ...state,
        items: payload.campaign
      };
    case UPDATE_PAGE_NUMBER:
      return {
        ...state,
        page: payload.page
      };
    case UPDATE_SEARCH_KEY:
      return {
        ...state,
        searchKey: payload.searchKey,
        page: 1
      };
    case WRITE_CAMPAIGN_ID:
      return {
        ...state,
        editId: payload.editId
      };
    case CLEAR_CAMPAIGN_ID:
      return {
        ...state,
        editId: payload.editId
      };
    case REMOVE_CAMPAIGN:
      const filteredCampaign = state.items.filter(
        item => payload.itemId.indexOf(item._id) === -1
      );
      const deleteList = state.deleteList.filter(
        item => payload.itemId.indexOf(item) === -1
      );
      return {
        ...state,
        items: filteredCampaign,
        deleteList: deleteList
      };
    case UPDATE_CAMPAIGN:
      const updatedCampaign = state.items.map(item => {
        if (item._id === payload.item._id) {
          item.name = payload.item.name;
          item.time = payload.item.time;
        }
        return item;
      });
      return {
        ...state,
        items: updatedCampaign,
        editId: ""
      };
    case ADD_TO_DELETE_ARRAY:
      const updatedDeleteList = state.deleteList.concat(payload.itemId);
      return {
        ...state,
        deleteList: updatedDeleteList
      };
    case REMOVE_FROM_DELETE_ARRAY:
      const removedDeleteArray = state.deleteList.filter(
        item => payload.itemId.indexOf(item) < 0
      );
      return {
        ...state,
        deleteList: removedDeleteArray
      };
    case ADD_AUTH_USER_DATA:
      return {
        ...state,
        authUsers: payload.authUsers
      };
    default:
      return state;
  }
}
