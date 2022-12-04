import React, { Component } from "react";
import { useDispatch, connect } from "react-redux";
import { added } from "../../store/reducer/catatanSlice";

class CatatanCreate extends Component {
  state = {
    headline: "",
    content: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const temp = this.state;
    this.props.added(temp);
  };

  handleChangeHeadline = (e) => {
    this.setState({
      headline: e.target.value,
    });
  };

  handleChangeContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>{this.props.headline}</h1>
            <label>headline</label>
            <input
              type="text"
              className="border-[1px] border-black border-solid"
              onChange={this.handleChangeHeadline}
            />
          </div>
          <div>
            <label>content</label>
            <textarea
              onChange={this.handleChangeContent}
              className="border-[1px] border-black border-solid"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="submit-btn">
              submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  headline: state.catatan.headline,
});

export default connect(mapStateToProps, { added })(CatatanCreate);
