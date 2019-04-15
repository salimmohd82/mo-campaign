import React from "react";

import "./view.css";

function ResultCount(props) {
  return (
    <span>
      showing {props.page * 10 - 9} - {props.page * 10 - 10 + props.countinPage}{" "}
      of {props.activecampaignListCount}
    </span>
  );
}

export default ResultCount;
