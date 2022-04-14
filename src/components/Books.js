import PropTypes from "prop-types";

function Books({ title, image, author }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </div>
  );
}

export function GenresBook({ title, image }) {
  return (
    <div>
      <div>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
    </div>
  );
}
Books.propTypes = {
  title: PropTypes.string,
  author: PropTypes.array,
  description: PropTypes.string,
  image: PropTypes.string,
};
export default Books;