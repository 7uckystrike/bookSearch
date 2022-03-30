import { useEffect, useState } from "react"
import { blogSearch } from "../api"
import Item from "./Item";
import "./Search.css"

const Search = props => {
  const [blogs, setBlogs] = useState([]);
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

  const { data } = await blogSearch(params);

  if (reset) {
  setBlogs(data.documents);
  } else {
    setBlogs(blogs.concat(data.documents));
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
      {blogs.map(
        (blog, index) => (
          <Item
            key={index}
            thumbnail={blog.thumbnail}
            title={blog.title}
            contents={blog.contents}
            url={blog.url}
          />
        ))}
    </ul>
    </div>
  )
}


export default Search;
