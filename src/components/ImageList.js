import ImageCard from "./ImageCard";
const ImageList = ({ images }) => {
  return (
    <div className="ui grid container">
      {images.map((item, i) => (
        <ImageCard image={item} key={i} />
      ))}
    </div>
  );
};
export default ImageList;
