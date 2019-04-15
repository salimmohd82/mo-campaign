import React from "react";
import "./view.css";

const CampaignName = ({ searchKey, name }) => {
  let highlightedNameArray = [];

  if (searchKey) {
    const search = new RegExp(searchKey, "gi");
    const searchKeyLength = searchKey.length;
    name.replace(search, function(word, index) {
      if (highlightedNameArray.length === 0) {
        if (index === 0) {
          highlightedNameArray = [
            <span key={name + word + index} className="highlight-search">
              {word}
            </span>
          ];
        } else {
          highlightedNameArray = [
            name.slice(0, index),
            <span key={name + word + index} className="highlight-search">
              {word}
            </span>
          ];
        }
      } else {
        highlightedNameArray[highlightedNameArray.length] = (
          <span key={name + word + index} className="highlight-search">
            {word}
          </span>
        );
      }
      if (name.length > index + searchKeyLength) {
        highlightedNameArray.push(name.slice(index + searchKeyLength));
      }
      return word;
    });
  }

  return <div>{searchKey ? highlightedNameArray : name}</div>;
};

export default CampaignName;
