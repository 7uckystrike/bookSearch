import PropTypes from "prop-types";
import { BooksBoxDiv } from "../style/BooksListCSS"

const Books= ({ title, image, author }) => {
  
  return (
    <BooksBoxDiv>
      <img src={image} alt={title}/>
      <p className="books_title">{title}</p>
      <p className="books_author">{author}</p>
    </BooksBoxDiv>
  );
}

Books.propTypes = {
  title: PropTypes.string,
  author: PropTypes.array,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Books;