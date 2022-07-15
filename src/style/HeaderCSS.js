import styled from '@emotion/styled'


const HeaderDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  .title {
    color: #aa8eed;
    font-size: 90px;
    display: block;
    text-align: center;
    font-family: 'Fugaz One', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-index,
  .content-search,
  .content-memo {
    font-size: 60px;
    font-family: 'Fugaz One';
    text-shadow: 2px 2px 0px #eee, 4px 4px 0px #000
    }

  .content-index {
    color: #f1de95;
  }

  .content-search {
    color: #f19995;
  }

  .content-memo {
    color:#bcdce4;
  }
`


export { HeaderDiv }