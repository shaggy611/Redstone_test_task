import { styled } from 'styled-components'
import { useContext } from 'react'
import { PopupContext } from '../../context/popupContext'
import { StyledBUtton } from '../PopupButton'

function PopUp() {
  const { isPopupOpen, closePopup } = useContext(PopupContext)

  const openedPopUp = {
    opacity: isPopupOpen ? '1' : '',
    visibility: isPopupOpen ? 'visible' : '',
    transform: isPopupOpen ? 'translateY(0)' : '',
  }

  return (
    <StyledPopUp style={openedPopUp}>
      <div className='pop-up-wrapper'>
        <div className='container'>
          <div className='pop-up-inner' style={openedPopUp}>
            <p className='pop-title'>
              Розкажіть нам про свій проект, подумаємо над ним разом. Почніть з
              простого - просто напишіть нам
            </p>

            <form method='post' className='ContactForm'>
              <div className='row form-row'>
                <div className='userName'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Ваше ім’я'
                    className='input'
                  />
                </div>
                <div className='phone'>
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Ваш телефон'
                    className='input'
                  />
                </div>
                <div className='email'>
                  <input
                    type='email'
                    name='email'
                    placeholder='*Ваш email'
                    className='input focused invalid'
                    required=''
                  />
                </div>
                <div className='about'>
                  <textarea
                    name='mess'
                    placeholder='Коротко опишіть свій проект'
                    className='input'></textarea>
                </div>
              </div>
              <div className=''>
                <StyledSubmitButton type='submit'>НАДІСЛАТИ</StyledSubmitButton>
              </div>
              <div
                className='form-response'
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#e70000',
                  marginTop: '10px',
                  textAlign: 'right',
                  display: 'none',
                }}>
                Помилка відправлення. Спробуйте ще раз!
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='btn-close' onClick={() => closePopup()}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M18 6L6 18'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'></path>
          <path
            d='M6 6L18 18'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'></path>
        </svg>
      </div>
    </StyledPopUp>
  )
}

export default PopUp

const StyledPopUp = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  font-size: 0;
  text-align: center;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  padding: 15px;
  letter-spacing: 0;
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
  background-color: #fff;
  padding: 0 0;
  z-index: 999;
  overflow: hidden;
  height: 100vh;
  opacity: 0;
  transition: all 0.3s ease-in;

  & .pop-up-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
    background: #fff;
    max-width: 775px;
    z-index: 1;
    max-width: 100%;
    text-align: left;
  }

  & .pop-up-inner {
    max-width: 610px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0;
    transition: all 0.3s ease-in 0.5s;
  }

  & .container {
  }

  & .pop-title {
    font-size: 38px;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 20px;
    color: #232323;
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
  }

  & .container .form-row .input {
    border-bottom: 2px solid #dadada;
    padding: 13px 0;
    font-size: 16px;
    font-weight: 300;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: border-color 0.3s;
    transition: border-color 0.3s;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 0;
    background: 0 0;
    margin: 0;
    width: 100%;
    outline: none;
  }

  & .container .form-row .input:focus {
    color: #232323;
    border-bottom-color: #999;
  }

  & .form-row {
    margin-bottom: 35px;
    display: flex;
    flex-wrap: wrap;
  }

  & .userName,
  & .phone {
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 15px;
  }

  & .email,
  & .about {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 15px;
  }

  & .about textarea {
    display: block;
    resize: none;
    height: 100px;
  }

  & button {
    color: #e70000;
    background-color: #fff;
    width: fit-content;
    min-height: 48px;

    &::before {
      -webkit-transform: translateY(100%);
      -ms-transform: translateY(100%);
      transform: translateY(100%);
    }

    &:hover {
      color: #fff;
    }

    &:hover::before {
      -webkit-transform: translateY(0%);
      -ms-transform: translateY(0%);
      transform: translateY(0%);
    }
  }

  & .btn-close {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 24px;
    height: 24px;
    display: inline-block;
    cursor: pointer;
    z-index: 1;

    & svg {
      stroke: #424242;
    }

    &:hover svg {
      stroke: #e70000;
    }
  }
`

const StyledSubmitButton = styled(StyledBUtton)`
  color: #e70000;
  background-color: #fff;
  width: fit-content;
  min-height: 48px;
  margin-left: 10px;

  &::before {
    -webkit-transform: translateY(100%);
    -ms-transform: translateY(100%);
    transform: translateY(100%);
  }

  &:hover {
    color: #fff;
  }

  &:hover::before {
    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
  }
`
