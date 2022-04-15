import { bookSearch } from "../api";
import { useState, useEffect } from "react"
import Item from "../components/Item"
import "../style/Search.css"

const App = props => {
  const [books, setBooks] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      bookSearchHttpHandler(query, true);
    }
  }, [query]);

  // 엔터를 눌렀을 때 호출 되는 함수
  const onEnter = e => {
    if (e.keyCode === 13) {
      setQuery(text);
    }
  };

  // text 검색어가 바뀔 때 호출되는 함수.
  const onTextUpdate = e => {
    setText(e.target.value);
  };

  const bookSearchHttpHandler = async (query, reset) => {
    const params = {
      query: query,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: 10 // 한 페이지에 보여 질 문서의 개수
    };

    const { data } = await bookSearch(params);
    if (reset) {
      setBooks(data.documents);
    } else {
      setBooks(books.concat(data.documents));
    }
  };

  return (
    <div className={'search_line'}>
      <input
        type="search"
        placeholder="검색어를 입력 하세요..."
        name="query"
        className="search_input"
        onKeyDown={onEnter} // enter
        onChange={onTextUpdate} // change
        value={text} // view
      />

      <ul>
        <div className={'search_box'}>
          {books.map((book, index) => (
            <Item
              key={index}
              thumbnail={book.thumbnail}
              title={book.title}
              blogname={book.blogname}
              contents={book.contents}
              url={book.url}
            />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default App;