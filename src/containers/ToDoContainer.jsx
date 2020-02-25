import {connect} from "react-redux";
import {
  getTodos
} from "../actions/todo-actions";

import ToDoList from "../view/ToDoList";

const mapStateToProps = ({todos}) => {
  const { list, loading } = todos;
  return { 
    toDoItems: list, 
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
