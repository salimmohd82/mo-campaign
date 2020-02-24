import {connect} from "react-redux";
import {
  fetchUserData
} from "../actions/user-actions";

import UserList from "../view/UserList";

const mapStateToProps = ({user}) => {
  const { list, loading } = user;
  return { 
    userList: list, 
    loading 
  };
};

const mapDispatchToProps = {
  fetchUserData
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddTodo: todo => {
//       dispatch(getNews());
//     }
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
