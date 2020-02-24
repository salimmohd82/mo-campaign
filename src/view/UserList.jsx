import React, {Component} from "react";
import LoadingSpinner from "./LoadingSpinner";

class UserList extends Component {
  
  static defaultProps = {
    loading: false,
    userList: []
  }
  
  componentDidMount() {
    this.props.fetchUserData();
  }

  render() {
    return (<>
            {
              this.props.loading ? 
              (<LoadingSpinner />) : 
              (this.props.userList.length > 0) && this.props.userList.map((user,i) => {
                return (<div key={i}>
                 {user.name}
                </div>);
             })
            }
          </>);
  }

}

export default UserList;