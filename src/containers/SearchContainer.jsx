import { connect } from "react-redux";
import { updateSearchKey } from "../actions/campaign-actions";

import Search from "../view/Search";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  updateSearchKey
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
