import {connect} from "react-redux";
import {
  getTodos
} from "../actions/todo-actions";

import ToDoList from "../view/ToDoList";

const mapStateToProps = ({user}) => {
  const { list, loading } = user;
  return { 
    ToDoItems: list, 
    loading 
  };
};

const mapDispatchToProps = {
  getTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
