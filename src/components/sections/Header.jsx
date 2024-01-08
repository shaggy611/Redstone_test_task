import { styled } from 'styled-components'
import logo from '../../assets/logo.svg'
import MenuButton from '../MenuButton'
import Navigation from '../Navigation'
import PopupButton from '../PopupButton'
import { useState, useEffect, useContext } from 'react'
import { PopupContext } from '../../context/popupContext'
import makeAjaxRequest from './../../helpers/ajaxCall'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { openPopup } = useContext(PopupContext)

  const shadow = {
    boxShadow: scrolled ? '0 5px 10px rgba(0,0,0,.02)' : '',
  }

  function handlePopUpOpen() {
    makeAjaxRequest('/', openPopup)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <StyledHeader style={shadow}>
      <div className='container'>
        <div className='header-left'>
          <div className='logo'>
            <a href='/'>
              <img src={logo} alt='Створення сайтів Львів' />
            </a>
          </div>
          <MenuButton />
        </div>

        <div>
          <Navigation />
        </div>

        <div className='header-right'>
          <a href='tel:+380676075784' target='_blank' rel='noreferrer'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M16.5453 0V-0.1H16.4453H3.55469H3.45469V0V20V20.1H3.55469H16.4453H16.5453V20V0ZM15.1734 18.7281H4.82656V1.27188H15.1734V18.7281Z'
                strokeWidth='0.2'></path>
              <path d='M8 15H12V17H8V15Z'></path>
            </svg>
            +38 067 607 57 84
          </a>

          <PopupButton onClickEv={() => handlePopUpOpen()} />
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #fff;

  & .container {
    height: 130px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    @media (max-width: 1819px) {
      height: 80px;
    }
  }

  & .header-left {
    display: flex;

    @media (max-width: 767px) {
      width: 100%;
      justify-content: space-between;
    }
  }

  & .logo {
    margin-right: 94px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 100;
    position: relative;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;

    & a {
      display: flex;
    }

    & img {
      max-width: 170px;

      @media (max-width: 1819px) {
        max-width: 140px;
      }
    }

    @media (max-width: 1819px) {
      margin-right: 40px;
    }
  }

  & .header-right {
    -webkit-box-align: inherit;
    -ms-flex-align: inherit;
    align-items: inherit;
    display: flex;

    @media (max-width: 767px) {
      width: 20px;
    }

    & button {
      @media (max-width: 767px) {
        display: none;
      }
    }

    & a {
      font-size: 16px;
      position: relative;
      top: 2px;
      padding-left: 28px;
      white-space: nowrap;
      margin-right: 30px;
      letter-spacing: 0;
      font-weight: 500;
      text-transform: uppercase;
      color: #232323;
      transition: 0.3s;

      @media (max-width: 767px) {
        font-size: 0;
        margin-top: -10px;
      }

      &:hover {
        color: #e70000;
      }

      & svg {
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        position: absolute;
        left: 0;
      }

      & svg path:nth-child(1),
      & svg path:nth-child(2) {
        fill: currentColor;
      }
    }
  }
`
