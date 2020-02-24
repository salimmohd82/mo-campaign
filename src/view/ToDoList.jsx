import React, {Component, Fragment} from "react";
import LoadingSpinner from "./LoadingSpinner";

class ToDoList extends Component {
  
  static defaultProps = {
    loading: false,
    userList: []
  }
  
  constructor(props){
    super(props);
    console.log("load", props);
  }
  
  componentDidMount() {
    this.props.getTodos();
  }

  componentDidUpdate(){
    // console.log("update", this.props); 
  }
  render() {
    return (<>
            {
              this.props.loading ? 
              (<LoadingSpinner />) : 
              (this.props.ToDoItems.length > 0) && this.props.ToDoItems.map((item,i) => {
                return (<div key={item.id}>
                 {item.title}
               </div>);
             })
            }
          </>);
  }

}

export default ToDoList;