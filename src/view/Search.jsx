import React, {Component} from "react";
import "./view.css";

class Search extends Component {
  state = {
    autoSearch: false
  };

  handleSearchKey = e => {
    e.preventDefault();
    this.props.updateSearchKey(e.target.search.value);
  };

  debounce = (fn, time) => {
    let timeout;
    return function () {
      const functionCall = () => fn.apply(this, arguments);
      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  };

  handleChange = this.debounce(value => {
    const pattern = /[a-zA-Z0-9\s]+/;
    if ((this.state.autoSearch && pattern.test(value)) || value === "") {
      this.props.updateSearchKey(value);
    }
  }, 500);

  handleAutoSearchToggle = e => {
    this.setState({
      autoSearch: e.target.checked
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSearchKey}>
        <div className="form-row search">
          <div className="col-md-11">
            <input
              name="search"
              type="text"
              className="form-control"
              onChange={e => this.handleChange(e.target.value)}
              pattern="[a-zA-Z0-9\s]+"
              placeholder="Enter campaign name to search..."
            />
          </div>
          <div className="col-md-1">
            <button className="btn btn-primary" type="submit">
              SEARCH
            </button>
          </div>
          <div className="col-md-12 pd-t-10">
            <div className="custom-control custom-checkbox text-left">
              <input
                type="checkbox"
                className="custom-control-input"
                id="auto-search"
                defaultChecked={this.state.autoSearch}
                onChange={this.handleAutoSearchToggle}
              />
              <label className="custom-control-label" htmlFor="auto-search">
                Enable Auto Search with debounce
              </label>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
