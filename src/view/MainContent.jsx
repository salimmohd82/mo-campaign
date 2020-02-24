import React from "react";
import ListContainer from "../containers/ListContainer";
import SearchContainer from "../containers/SearchContainer";

export default function MainContent () {
    return([<SearchContainer key="search" />,
            <ListContainer key="list" />]);
}