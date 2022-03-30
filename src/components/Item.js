import react from "react";

const Item = props => {
  return(
    <li>
      <dl>
        <dt>
          <img src={props.thumbnail} alt={props.thumbnail} className="book_img"/>
        </dt>
        <dd>
          <h4 className="book_title">{props.title}</h4>
          <a href={props.url} target="_blank" className="book_link">상세정보</a>
        </dd>
      </dl>
    </li>
  )
}

export default Item;