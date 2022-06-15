import PostItem from "./PostItem"
import { PostListDiv } from "../style/Post/PostListCSS"

const PostList = ({lists, onInsertToggle }) => {
  return (
    <PostListDiv>
      {lists.map(list => (
        <PostItem 
          list={list} 
          key={list.id}
          onInsertToggle={onInsertToggle} />
      )
      )}
    </PostListDiv>
  )
}

export default PostList