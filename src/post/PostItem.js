import { PostItemDiv } from "../style/Post/PostItemCSS"

const PostItem = ({ list, onInsertToggle }) => {
  const { id, text } = list

  return (
    <PostItemDiv>
     <span className="text" 
      onClick={onInsertToggle}>{id}, {text}</span>
    </PostItemDiv>
  )
}

export default PostItem