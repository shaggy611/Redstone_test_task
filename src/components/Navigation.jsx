import { styled } from 'styled-components'
import HeaderSubMenu from './HeaderSubMenu'

function Navigation() {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <a href='#'>Портфоліо</a>
        </li>
        <li className='sub-menu-children'>
          <a href='#'>Послуги</a>
          <span className='sub-menu-ico'></span>
          <HeaderSubMenu />
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

  @media (max-width: 767px) {
    display: none;
  }

  & ul {
    list-style: none;

    & .sub-menu-children {
      position: relative;
      overflow: visible;
    }

    & .sub-menu-children:hover > div {
      /* opacity: 1 !important; */
      -webkit-clip-path: inset(0 0 0 0);
      clip-path: inset(0 0 0 0);
      pointer-events: all;
    }
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

    & .sub-menu-ico {
      display: block;
      border-left: 1px solid;
      width: 6px;
      height: 6px;
      border-bottom: 1px solid;
      position: absolute;
      right: -13px;
      top: 2px;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    @media (max-width: 1819px) {
      margin-left: 15px;
      margin-right: 15px;
    }
  }
`
