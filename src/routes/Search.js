import { bookSearch } from "../api";
import { useState, useEffect } from "react"
import Item from "../components/Item"
import Header from "../components/Header";
import {SearchInputDiv, SearchBoxDiv} from "../style/SearchCSS"

const Search = (props) => {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

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

  const bookSearchHttpHandler = async (query, reset) => {
    const params = {
      query: query,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, 
      size: 10 
    };

    const { data } = await bookSearch(params);
    if (reset) {
      setBooks(data.documents);
    } else {
      setBooks(books.concat(data.documents));
    }
  }

  return (
    <>
      <Header />
      <SearchInputDiv className="search_line">
        <input
          type="search"
          placeholder="검색어를 입력 하세요!"
          name="query"
          onKeyDown={onEnter}
          onChange={onTextUpdate}
          value={text}
        />
        <ul>
          <SearchBoxDiv>
            {books.map((book, index) => (
              <Item
                key={index}
                thumbnail={book.thumbnail}
                title={book.title}
                url={book.url}
              />
            ))}
          </SearchBoxDiv>
        </ul>
      </SearchInputDiv>
    </>
  );
};

export default Search;