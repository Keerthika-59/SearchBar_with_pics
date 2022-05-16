import React from "react";
import Searchbar from "./components/SearchBar";
import unsplash from "./api/unsplashapi";
import ImageList from "./components/ImageList";
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: { term } }
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        {this.state.images.length > 0 && (
          <ImageList images={this.state.images} />
        )}{" "}
      </div>
    );
  }
}
export default App;
