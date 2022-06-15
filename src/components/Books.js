import PropTypes from "prop-types";
import "../style/Item.css"

const Books= ({ title, image, author }) => {
  
  return (
    <div>
      <img src={image} alt={title} className={'item_img'} />
      <h1 className={'item_title'}>{title}</h1>
      <h3 className={'item_author'}>{author}</h3>
    </div>
  );
}

export const GenresBook = ({ title, image }) => {
  return (
    <div>
      <div>
        <img src={image} alt={title} className={'item_img'}/>
      </div>
      <h3 className={'item_title'}>{title}</h3>
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