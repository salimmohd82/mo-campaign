import { connect } from "react-redux";
import {
  addRootData,
  writeEditId,
  removeCampaign,
  addToDeleteArray,
  removeFromDeleteArray,
  clearEditId,
  updateCampaignDetail,
  updatePageNumber
} from "../actions/campaign-actions";

import List from "../view/List";

const getActiveCampaigns = data => {
  let filteredData = data.items;
  let startIndex = (data.page - 1) * 10;

  if (data.searchKey) {
    filteredData = searchCampaigns(filteredData, data.searchKey);
  }
  return Object.entries(filteredData)
    .slice(startIndex, startIndex + 10)
    .map(entry => entry[1]);
};

const getActiveCampaignsNotPaginated = data => {
  let filteredData = data.items;

  if (data.searchKey) {
    filteredData = searchCampaigns(filteredData, data.searchKey);
  }
  return Object.entries(filteredData).map(entry => entry[1]).length;
};

const createPageArray = (data, currentPage) => {
  const noOfPages = Math.ceil(data / 10);
  let pageArray = [];
  for (let i = 1; i <= noOfPages; i++) {
    pageArray.push(i);
  }
  return pageArray;
};

const searchCampaigns = (data, key) => {
  return data.filter(item => {
    const searchKey = new RegExp(key, "gi");
    return item.name.search(searchKey) !== -1;
  });
};

const getCampaignDetailsFromId = (campaignListPaginated, id) => {
  return campaignListPaginated.find(item => item._id === id);
};

const mapStateToProps = ({ campaign }) => {
  const campaignListPaginated = getActiveCampaigns(campaign);
  const activecampaignListCount = getActiveCampaignsNotPaginated(campaign);
  const pageArray = createPageArray(activecampaignListCount, campaign.page);
  return {
    campaignListPaginated,
    activecampaignListCount,
    pageArray,
    deleteList: campaign.deleteList,
    searchKey: campaign.searchKey,
    editId: campaign.editId,
    editItem: getCampaignDetailsFromId(campaignListPaginated, campaign.editId),
    page: campaign.page
  };
};

const mapDispatchToProps = {
  addRootData,
  writeEditId,
  removeCampaign,
  addToDeleteArray,
  removeFromDeleteArray,
  clearEditId,
  updateCampaignDetail,
  updatePageNumber
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
