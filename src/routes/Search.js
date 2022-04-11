import { useEffect, useState } from "react"
import { bookSearch } from "../api"
import Item from "../components/Item";

const Search = props => {
  const [book, setBooks] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
     bookSearchHttpHandler(query, true);
    }
  }, [query]);

  const onEnter = e => {
    if (e.keyCode === 13) {
      setQuery(text);
    }
  };

  const onTextUpdate = e => {
    setText(e.target.value);
  };
  
  const bookSearchHttpHandler = async(query, reset) => {
    const params = {
      query : query,
      sort : "accuracy",
      page : 1,
      size : 10
    };

  const { data } = await bookSearch(params);

  if (reset) {
  setBooks(data.documents);
  } else {
    setBooks(book.concat(data.documents));
  }
}

  return (
    <div claaName="book_container">
      <input 
        type="search" 
        placeholder="검색어를 입력하시오" 
        name="query" 
        onKeyDown={onEnter}
        onChange={onTextUpdate}
        value={text} 
        className="book_search"
      />
    <ul>
      {book.map(
        (book, index) => (
          <Item
            key={index}
            thumbnail={book.thumbnail}
            title={book.title}
            contents={book.contents}
            url={book.url}
          />
        ))}
    </ul>
    </div>
  )
}


export default Search;