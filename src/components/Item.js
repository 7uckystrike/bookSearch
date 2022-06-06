import "../style/Item.css"

const Item = (props) => {

  //onst heartIcon = alreadyFavorite ? "💖" : "🤍";

  return(
    <li>
      <dl>
        <dt>
          <img src={props.thumbnail} alt={props.thumbnail} className={'item_img'}/>
        </dt>
        <dd>
          <strong className={'item_title'}>{props.title}</strong>
          <br/><br/>
          <a href={props.url} className={'item_link'}>상세정보</a>
          <button>하트</button>
        </dd>
      </dl>
    </li>
  )
}

export default Item;


