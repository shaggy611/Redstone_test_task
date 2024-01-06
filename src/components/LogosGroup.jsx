import { styled } from 'styled-components'
import clutchLogo from '../assets/clutchco.svg'
import awwwardsLogo from '../assets/green-awwwards.svg'
import itrLogo from '../assets/itr_logo.svg'
import otherLogo from '../assets/other.svg'

function LogosGroup() {
  return (
    <StyledLogos>
      <a
        href='https://clutch.co/profile/redstone'
        target='_blank'
        rel='noreferrer'>
        <img src={clutchLogo} alt='clutch.co' />
      </a>
      <a
        href='https://www.awwwards.com/REDSTONE/'
        target='_blank'
        rel='noreferrer'>
        <img src={awwwardsLogo} alt='awwwards.com' />
      </a>
      <a
        href='https://it-rating.ua/rating-webstudio-lvov-2020'
        target='_blank'
        rel='noreferrer'>
        <img src={itrLogo} alt='it-rating.ua' />
      </a>
      <a href='../nagorody'>
        <img src={otherLogo} alt='Other Awards' />
      </a>
    </StyledLogos>
  )
}

export default LogosGroup

const StyledLogos = styled.div`
  margin-top: 100px;
  min-height: 50px;
  align-items: center;
  justify-content: flex-start;
  display: flex;

  & a {
    max-width: 110px;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    cursor: pointer;
    -webkit-transition: 0.3s;
    transition: 0.3s;

    &:hover {
      @media (min-width: 1200px) {
        -webkit-filter: none;
        filter: none;
      }
    }

    &:nth-child(1) {
      max-width: 80px;
    }

    &:not(:last-child) {
      margin-right: 55px;

      @media (max-width: 1819px) {
        margin-right: 45px;
      }
    }

    &:nth-child(3) {
      max-width: 100px;
    }

    &:nth-child(4) {
      max-width: 38px;
    }

    & img {
      max-width: 100%;
      vertical-align: top;
    }

    @media (min-width: 1200px) {
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }
  }

  @media (max-width: 1819px) {
    margin-top: 45px;
  }
`
