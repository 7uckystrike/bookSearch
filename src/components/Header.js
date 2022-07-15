import { Link } from 'react-router-dom';
import { HeaderDiv } from '../style/HeaderCSS'

const Header = () => {
  return (
    <HeaderDiv>
      <div className='header'>
      <div className='content'>
        <Link to ='/' className='content-index'>INDEX</Link>
        <Link to ='/Search' className='content-search'>SEARCH</Link>
        <Link to ='/Memo' className='content-memo'>MEMO</Link>
      </div>
      </div>
    </HeaderDiv>
  
  )
}

export default Header