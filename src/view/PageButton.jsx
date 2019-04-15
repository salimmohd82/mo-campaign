import React from "react";

import "./view.css";

function PageButton(props) {
  const onUpdatePageNumber = pageNumber => {
    props.onUpdatePageNumber(pageNumber);
  };
  return (
    <span
      className={props.activePage === props.page ? "active" : ""}
      onClick={() => onUpdatePageNumber(props.page)}
    >
      {props.page}
    </span>
  );
}

export default PageButton;
