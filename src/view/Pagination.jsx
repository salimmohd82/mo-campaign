import React, { Component } from "react";

import PageButton from "./PageButton";
import ResultCount from "./ResultCount";
import "../App.css";

class Pagination extends Component {
  onUpdatePageNumber = pageNumber => {
    this.props.updatePageNumber(pageNumber);
  };

  render() {
    return (
      <div className="row justify-content-md-center pagination-row">
        <ResultCount
          page={this.props.page}
          countinPage={this.props.countinPage}
          activecampaignListCount={this.props.activecampaignListCount}
        />
        <span
          className={this.props.page === 1 ? "active" : ""}
          onClick={() => this.onUpdatePageNumber(1)}
        >
          {"<<"}
        </span>
        <div className="col-md-auto">
          {this.props.pageArray.map(item => (
            <PageButton
              activePage={this.props.page}
              key={item}
              page={item}
              onUpdatePageNumber={this.props.updatePageNumber}
            />
          ))}
        </div>

        <span
          className={
            this.props.page === Math.max(...this.props.pageArray)
              ? "active"
              : ""
          }
          onClick={() =>
            this.onUpdatePageNumber(Math.max(...this.props.pageArray))
          }
        >
          {">>"}
        </span>
      </div>
    );
  }
}

export default Pagination;
