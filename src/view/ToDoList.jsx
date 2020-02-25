import React, { Component } from "react";
import LoadingSpinner from "./LoadingSpinner";

class ToDoList extends Component {
  
  static defaultProps = {
    loading: false,
    toDoItems: []
  }
  
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (<>
            {
              this.props.loading ? 
              (<LoadingSpinner />) : 
              (this.props.toDoItems.length > 0) && this.props.toDoItems.map((item,i) => {
                return (<div key={item.id}>
                 {item.title}
               </div>);
             })
            }
          </>);
  }

}

export default ToDoList;