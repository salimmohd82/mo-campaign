import React from "react";

function Edit({ campaignDetail, updateCampaignDetail }) {
  const onUpdateCampaignDetail = e => {
    e.preventDefault();
    const timeStamp = new Date();
    const updatedValue = {
      _id: campaignDetail._id,
      name: e.target.campaignName.value,
      type: campaignDetail.type,
      company: campaignDetail.company,
      time: timeStamp.toString()
    };
    updateCampaignDetail(updatedValue);
  };

  return (
    <form name="edit-form" onSubmit={onUpdateCampaignDetail}>
      <div className="row">
        <div className="col-md-8 offset-md-1">
          <input
            name="campaignName"
            type="text"
            className="form-control"
            defaultValue={campaignDetail.name}
            required
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-outline-primary" type="submit">
            Update
          </button>
        </div>
      </div>
    </form>
  );
}

Edit.defaultProps = {
  campaignDetail: {
    name: "Campaign Name"
  }
};
export default Edit;
