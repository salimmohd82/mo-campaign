export const ADD_ROOT_DATA = "campaign:addRootData";
export const UPDATE_SEARCH_KEY = "campaign:updateSearchKey";
export const UPDATE_PAGE_NUMBER = "campaign:updatePageNumber";
export const WRITE_CAMPAIGN_ID = "campaign:writeEditId";
export const CLEAR_CAMPAIGN_ID = "campaign:clearEditId";
export const REMOVE_CAMPAIGN = "campaign:removeCampaign";
export const UPDATE_CAMPAIGN = "campaign:updateCampaignDetail";
export const ADD_TO_DELETE_ARRAY = "campaign:addToDeleteArray";
export const REMOVE_FROM_DELETE_ARRAY = "campaign:removeFromDeleteArray";

export function addRootData(data) {
  return {
    type: ADD_ROOT_DATA,
    payload: {
      campaign: data
    }
  };
}

export function updatePageNumber(page) {
  return {
    type: UPDATE_PAGE_NUMBER,
    payload: {
      page
    }
  };
}

export function updateSearchKey(searchKey) {
  return {
    type: UPDATE_SEARCH_KEY,
    payload: {
      searchKey
    }
  };
}

export function writeEditId(editId) {
  return {
    type: WRITE_CAMPAIGN_ID,
    payload: {
      editId
    }
  };
}

export function clearEditId() {
  return {
    type: CLEAR_CAMPAIGN_ID,
    payload: {
      editId: ""
    }
  };
}

export function removeCampaign(itemId) {
  return {
    type: REMOVE_CAMPAIGN,
    payload: {
      itemId
    }
  };
}

export function updateCampaignDetail(item) {
  return {
    type: UPDATE_CAMPAIGN,
    payload: {
      item
    }
  };
}

export function addToDeleteArray(itemId) {
  return {
    type: ADD_TO_DELETE_ARRAY,
    payload: {
      itemId
    }
  };
}

export function removeFromDeleteArray(itemId) {
  return {
    type: REMOVE_FROM_DELETE_ARRAY,
    payload: {
      itemId
    }
  };
}
