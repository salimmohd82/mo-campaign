import React, { Component } from "react";

import Pagination from "./Pagination";
import Item from "./Item";
import Edit from "./Edit";
import Modal from "./Modal";
import "./view.css";

import data from "../data/data";

class List extends Component {
  componentDidMount() {
    const timeStamp = new Date();
    const datedData = data.map(item => {
      return { ...item, time: timeStamp.toString() };
    });
    this.props.addRootData(datedData);
  }

  componentDidUpdate() {
    const noOfPages = Math.max(...this.props.pageArray);
    if (this.props.page > noOfPages) {
      this.props.updatePageNumber(noOfPages);
    }
  }

  handleCheckAll = e => {
    if (e.target.checked) {
      this.props.addToDeleteArray(
        this.props.campaignListPaginated.map(item => item._id)
      );
    } else {
      this.props.removeFromDeleteArray(
        this.props.campaignListPaginated.map(item => item._id)
      );
    }
  };

  removeSelected = () => {
    // check for the current page data
    const campaignListPaginatedIds = this.props.campaignListPaginated.map(
      item => item._id
    );

    const filteredCampaignIds = this.props.deleteList.map(item => {
      if (campaignListPaginatedIds.indexOf(item) > -1) {
        return item;
      } else {
        return "";
      }
    });
    this.props.removeCampaign(filteredCampaignIds);
  };

  handleModalCancel = () => {
    this.props.clearEditId();
  };

  validateParentCheck = () => {
    const checkFlag = this.props.campaignListPaginated.map(item =>
      this.props.deleteList.indexOf(item._id) < 0 ? false : true
    );
    return checkFlag.indexOf(false) > -1 ? false : true;
  };

  render() {
    if (this.props.campaignListPaginated.length <= 0) {
      return <h3>No matching campaigns found!</h3>;
    }
    return (
      <>
        <table id="example" className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="col-sl">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="group-checkbox"
                    checked={this.validateParentCheck()}
                    onChange={this.handleCheckAll}
                    id="checkall"
                  />
                  <label className="custom-control-label" htmlFor="checkall" />
                  <i
                    className="fa fa-trash delete-btn"
                    onClick={this.removeSelected}
                  />
                </div>
              </th>
              <th>Campaign Name</th>
              <th>Type</th>
              <th className="col-time">Last Saved</th>
              <th className="col-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.campaignListPaginated.map(item => (
              <Item
                key={item._id}
                item={item}
                deleteList={this.props.deleteList}
                searchKey={this.props.searchKey}
                writeEditId={this.props.writeEditId}
                removeCampaign={this.props.removeCampaign}
                addToDeleteArray={this.props.addToDeleteArray}
                removeFromDeleteArray={this.props.removeFromDeleteArray}
                validateParentCheck={this.validateParentCheck}
              />
            ))}
          </tbody>
        </table>
        <Pagination
          updatePageNumber={this.props.updatePageNumber}
          currentCampaignList={this.props.campaignListActive}
          page={this.props.page}
          pageArray={this.props.pageArray}
        />
        {this.props.editId && (
          <Modal onCancel={this.handleModalCancel}>
            <Edit
              campaignDetail={this.props.editItem}
              updateCampaignDetail={this.props.updateCampaignDetail}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default List;
