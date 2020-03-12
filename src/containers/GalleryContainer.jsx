import {connect} from "react-redux";
import {
  addItem
} from "../actions/gallery-actions";

import Gallery from "../view/Gallery";

const mapStateToProps = ({gallery}) => {
  const { items } = gallery;
  return { 
    images: items
  };
};

const mapDispatchToProps = {
  addItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
