import React from "react";
class ImageList extends React.Component {
  render() {
    return (
      <img
        className="four wide column"
        src={this.props.image.urls.regular}
        alt={this.props.image.description}
      />
    );
  }
}
export default ImageList;
