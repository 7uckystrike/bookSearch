import { BurketSpan } from "../style/BurketCSS"
import { useState } from "react"
import { MdAddCircle } from 'react-icons/md'

import Header from "../components/Header"
import Template from "../post/Template"
import PostList from "../post/PostList"
import PostInsert from "../post/PostInsert";


const Burket = () => {
  const [insertToggle, setInsertToggle] = useState(false)
  const [lists, setLists] = useState([])

  const LIST_KEY = "saveText"

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev)
  }

  const onInsertList = (text) => {
    if (text === "") {
      return alert("빈 공간이에요!")
    } else {
      const list = {
        text: text,
        id: Date.now(),
      }
      setLists(lists => lists.concat(list))
      localStorage.setItem(LIST_KEY, JSON.stringify(list));
    }
  } 

 const onSaved = localStorage.getItem(LIST_KEY)
  

  return(
    <div>
      <Header />
      <Template listLenght={lists.length}>
        <PostList 
          lists={lists} 
          onInsertToggle={onInsertToggle} 
        />
        <div onClick={onInsertToggle}>
          <BurketSpan>
            <MdAddCircle />
          </BurketSpan>
        </div>
        {insertToggle && (
            <PostInsert
              onInsertToggle={onInsertToggle}
              onInsertList={onInsertList}
            />
        )}
        {onSaved}
      </Template>
    </div>
  )
        }
        

export default Burket