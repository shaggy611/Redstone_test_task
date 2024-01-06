import { styled } from 'styled-components'
import { useState } from 'react'

function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <StyledButton
      type='button'
      onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
      <div className='menuButton'>
        <i></i>
      </div>
      <span>{!menuOpen ? 'МЕНЮ' : 'ЗАКРИТИ'}</span>
    </StyledButton>
  )
}

export default MenuButton

const StyledButton = styled.button`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  line-height: 1.2;
  position: relative;
  z-index: 100;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #232323;
  background-color: #fff;

  &:hover {
    color: #e70000;

    & .menuButton::before,
    & .menuButton::after {
      width: 100%;
    }
  }

  & .menuButton {
    width: 24px;
    height: 14px;
    margin-right: 23px;
    position: relative;

    & i {
      width: 100%;
      height: 2px;
      background-color: currentColor;
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      margin-top: -1px;
      transition: 0.3s;
      webkit-transition: 0.3s;
    }

    &::before,
    &::after {
      content: '';
      display: block;
      background-color: currentColor;
      height: 2px;
      position: absolute;
      width: 50%;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }

    &::before {
      left: 0;
      top: 0;
    }

    &::after {
      right: 0;
      bottom: 0;
    }
  }

  & span {
    -webkit-transition: 0.3s;
    transition: 0.3s;
    font-style: normal;
    position: absolute;
    top: 40%;
    left: 47px;
  }
`
