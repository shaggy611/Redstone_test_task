import { styled } from 'styled-components'

function Navigation() {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <a href='#'>Портфоліо</a>
        </li>
        <li>
          <a href='#'>Послуги</a>
        </li>
        <li>
          <a href='#'>Брендинг</a>
        </li>
        <li>
          <a href='#'>Контакти</a>
        </li>
      </ul>
    </StyledNavigation>
  )
}

export default Navigation

const StyledNavigation = styled.nav`
  font-size: 0;
  text-align: center;
  position: relative;
  top: 2px;
  margin-left: 41px;

  & ul {
    list-style: none;
  }

  & ul li {
    -webkit-transition: 0.3s;
    transition: 0.3s;
    display: inline-block;
    vertical-align: top;
    margin: 5px 32px;
    cursor: pointer;
    font-size: 13px;
    position: relative;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #232323;

    & a:active,
    & a:hover,
    & a:link,
    & a:visited {
      text-decoration: none;
      outline: 0;
    }

    &:hover {
      color: #e70000;
    }

    @media (max-width: 1819px) {
      margin-left: 15px;
      margin-right: 15px;
    }
  }
`
