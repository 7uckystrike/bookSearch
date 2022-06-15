import "../style/Item.css"
import { useState } from "react"

const Item = (props) => {
  const [button, setButton] = useState("🤍")
  const title = props.title

  const onClick = () => {
    if(button === '🤍') {
      setButton("💖")
      localStorage.setItem(title, JSON.stringify(props.thumbnail));
    }else{
      setButton("🤍")
      window.localStorage.removeItem(title)
    }
  }

  return(
    <>
      <li>
      <dl>
        <dt>
          <img src={props.thumbnail} alt={props.thumbnail} className={'item_img'}/>
        </dt>
        <dd>
          <strong className={'item_title'}>{props.title}</strong>
          <p>
            <a href={props.url} className={'item_link'}>상세정보</a>
            <button onClick={onClick}>{button}</button>
          
          </p>
        </dd>
      </dl>
    </li>

</>
  

  )
}

export default Item;

