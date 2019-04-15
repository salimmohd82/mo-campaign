import React, { Component } from "react";

import PageButton from "./PageButton";
import "../App.css";

class Pagination extends Component {
  onUpdatePageNumber = pageNumber => {
    this.props.onUpdatePageNumber(pageNumber);
  };

  render() {
    return (
      <div className="row justify-content-md-center pagination-row">
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
      </div>
    );
  }
}

export default Pagination;
