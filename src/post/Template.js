import { TemplateDiv } from "../style/Post/TemplateCSS"

const Template = ({children, listLenght}) => {
  return (
    <TemplateDiv>
      <div>오늘의 감상 {listLenght}</div>
      <div className="title">{children}</div>
    </TemplateDiv>
  )
}

export default Template