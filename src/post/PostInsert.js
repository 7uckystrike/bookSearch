import { PostInsertForm } from "../style/Post/PostInsertCSS"
import { useState, useRef } from "react"

const PostInsert = ({onInsertToggle, onInsertList }) => {
  const [value, setValue] = useState("");
  const inputRef =useRef(null)

  const onChange = (event) => {
    setValue(event.target.value);
  }

    const onSubmit = (event) => {
      event.preventDefault();
      onInsertList(value);
      setValue("");
      inputRef.current.focus();
      onInsertToggle();

    }
  
  return (
    <div>
      <div onClick={onInsertToggle}></div>
      <PostInsertForm onSubmit={onSubmit}>
        <input 
          ref={inputRef}
          placeholder="어떤 책을 읽으셨나요" 
          style={{paddingLeft:"5px"}}
          value={value}
          onChange={onChange} 
        />
        <button type="submit" onInsertList={onInsertList}
        >
          등록
        </button>
      </PostInsertForm>
    </div>
  )
}

export default PostInsert