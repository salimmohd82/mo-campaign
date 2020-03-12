import React, {Component} from "react";

import "./view.css";

class Gallery extends Component {
  
  static defaultProps = {
    images: []
  }

  constructor(props){
    super(props);
    console.log("new items",this.props.images);
  }

  componentDidUpdate(){
    
  }

  addOneItem(params) {
    this.props.addItem(params);
  }

  render() {
    return (<>
            {
              this.props.images.map((item,i) => {
                return (<div key={i}>
                 {item.name}
                 {item.id}
                </div>);
             })
            }
            <div className="margin-all" onClick={() => this.addOneItem({name:"one", id:1})}>click one</div>
            <div className="margin-all" onClick={() => this.addOneItem({name:"two", id:2})}>click two</div>
            <div className="margin-all" onClick={() => this.addOneItem({name:"three", id:3})}>click three</div>
            <div className="margin-all" onClick={() => this.addOneItem({name:"four", id:4})}>click four</div>
            <div className="margin-all" onClick={() => this.addOneItem({name:"five", id:5})}>click five</div>
          </>);
  }
}

export default Gallery;