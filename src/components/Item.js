import { ItemDiv, ItemLi } from "../style/ItemCSS"
import { useState} from "react"

const Item = (props) => {
  const [button, setButton] = useState("🤍")
  const [title, setTitle] = useState(props.title)

  const onClick = () => {
    if(button === '🤍') {
      setButton("💖")
      localStorage.setItem(title, JSON.stringify(title));
      
    }else{
      setButton("🤍")
      localStorage.removeItem(title)
      setTitle("")
    }
  }

  return(
    <>
      <ItemLi>
        <dl>
          <dt>
            <img src={props.thumbnail} alt={props.thumbnail}/>
          </dt>
          <dd>
            <ItemDiv>
              <strong className="item_title">{props.title}</strong>
              <br />
              <a href={props.url} className="item_link">상세정보</a>
              <button onClick={onClick}>{button}</button>
            </ItemDiv>
          </dd>
        </dl>
      </ItemLi>
    </>
  )
}

export default Item;

