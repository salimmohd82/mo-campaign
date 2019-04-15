import React, { Component } from "react";
import CampaignName from "./CampaignName";

class Item extends Component {
  editCampaign = id => {
    this.props.writeEditId(id);
  };

  removeCampaign = id => {
    this.props.removeCampaign([id]);
  };

  validateCheck = id => {
    return this.props.deleteList.indexOf(id) > -1 ? true : false;
  };

  handleCheck = e => {
    this.props.validateParentCheck();
    if (e.target.checked) {
      this.props.addToDeleteArray([e.target.value]);
    } else {
      this.props.removeFromDeleteArray([e.target.value]);
    }
  };

  render() {
    return (
      <>
        <tr>
          <td>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                value={this.props.item._id}
                checked={this.validateCheck(this.props.item._id)}
                onChange={this.handleCheck}
                id={this.props.item._id}
              />
              <label
                className="custom-control-label"
                htmlFor={this.props.item._id}
              />
            </div>
          </td>
          <td>
            <CampaignName
              name={this.props.item.name}
              searchKey={this.props.searchKey}
            />
          </td>
          <td>{this.props.item.type}</td>
          <td>{this.props.item.time}</td>
          <td className="action-icons">
            <i
              className="fa fa-edit edit-btn"
              onClick={() => this.editCampaign(this.props.item._id)}
            />
            <i
              className="fa fa-trash delete-btn"
              onClick={() => this.removeCampaign(this.props.item._id)}
            />
          </td>
        </tr>
      </>
    );
  }
}

export default Item;
