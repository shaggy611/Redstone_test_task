import { styled, keyframes } from 'styled-components'
import BannerPortfolioButton from '../BannerPortfolioButton'
import LogosGroup from '../LogosGroup'

function Banner() {
  return (
    <StyledBanner>
      <div className='container'>
        <div className='main-content'>
          <div className='left'>
            <h1>
              Сайти <span>.</span> Арр <span>.</span> Брендинг - Робимо складне
              простим
            </h1>

            <BannerPortfolioButton />

            <LogosGroup />
          </div>
          <div className='right'>
            <div className='experience'>
              <svg
                version='1.1'
                viewBox='0 0 100 100'
                width='100%'
                height='100%'
                preserveAspectRatio='xMidYMid meet'>
                <text x='50%' y='97%' strokeWidth='1' textAnchor='middle'>
                  <tspan>18</tspan>
                </text>
              </svg>
            </div>

            <p className='subtext'>Років переносимо ваш бізнес online</p>
          </div>
        </div>

        <div className='dashedPointer'>
          <svg
            width='63'
            height='14'
            viewBox='0 0 63 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0 7H55.902'
              stroke='#989898'
              strokeDasharray='5.49 8.78'
              className='dashed'></path>
            <path
              d='M54.9297 1L61.7405 7.16216L54.9297 13'
              stroke='#989898'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
          </svg>
        </div>
      </div>
    </StyledBanner>
  )
}

export default Banner

const draw = keyframes`
    100% {
        stroke-dashoffset: 0;
    }
`

const fill_text_2 = keyframes`
    100% {
        fill: #f3f3f3;
        stroke: transparent;
    }
`

const appear = keyframes`
    100% {
        opacity: 1
    }
`

const dash = keyframes`
    0% {
        stroke-dashoffset: 200; 
    }
    100% {
        stroke-dashoffset: 0;
    }
`

const StyledBanner = styled.section`
  margin-bottom: 180px;

  @media (max-width: 1819px) {
    margin-bottom: 135px;
  }

  @media (max-width: 767px) {
    margin-bottom: 80px;
  }

  & .container {
    height: 100vh;
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1819px) {
      height: 100vh;
      min-height: 400px;
    }

    & .main-content {
      display: flex;
      justify-content: center;
      flex-direction: row;
      justify-content: space-between;
      height: 100%;

      @media (max-width: 1024px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
      }
    }

    & h1 {
      max-width: 15em;
      margin-bottom: 25px;
      font-size: 58px;
      font-weight: 600;
      line-height: 1.125;
      color: #232323;
      position: relative;
      top: 10px;

      @media (max-width: 1819px) {
        font-size: 46px;
        top: 4px;
      }

      @media (max-width: 1024px) {
        text-align: center;
        justify-content: center;
        margin: 0 auto;
      }

      @media (max-width: 767px) {
        font-size: 30px;
      }

      & span {
        color: #e70000;
        font-weight: inherit;
      }
    }
  }

  & .left {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    animation: ${appear} 1s linear forwards;
    -webkit-animation: ${appear} 1s linear forwards;

    @media (max-width: 1024px) {
      text-align: center;
      justify-content: center;
      margin-top: 60px;
    }
  }

  & .right {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & .experience {
    position: relative;
    height: 100%;
    margin-bottom: 20px;

    width: 100%;
    font-weight: 900;
    stroke: #424242;
    -webkit-backface-visibility: hidden;
    height: 360px;
    stroke: #e6e6e6;

    @media (max-width: 1024px) {
      height: 260px;
    }
  }

  & .subtext {
    letter-spacing: 0.05em;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    color: #424242;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 1819px) {
      font-size: 14px;
    }
  }

  & .experience svg {
    & text {
      font-weight: 500;
      font-size: 130px;
      letter-spacing: -6px;
      stroke-dasharray: 500;
      stroke-dashoffset: 500;
      fill: transparent;
      animation: ${draw} 2s linear forwards;
      -webkit-animation: ${draw} 2s linear forwards;

      @media (max-width: 1024px) {
        font-size: 90px;
      }

      @media (max-width: 992px) {
        font-size: 60px;
      }
    }

    & tspan {
      fill: transparent;
      animation: ${fill_text_2} 0.8s linear forwards 1s;
      -webkit-animation: ${fill_text_2} 0.8s linear forwards 1s;
    }
  }

  & .dashedPointer {
    position: absolute;
    bottom: 40px;
    left: 50%;
    cursor: pointer;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    margin-right: -14px;
    -webkit-transform: rotate(90deg) translateX(-50%) translateY(-14px);
    -ms-transform: rotate(90deg) translateX(-50%) translateY(-14px);
    transform: rotate(90deg) translateX(-50%) translateY(-14px);

    & svg .dashed {
      -webkit-animation: ${dash} 8s linear infinite;
      animation: ${dash} 8s linear infinite;
    }

    @media (max-width: 1024px) {
      bottom: 10px;
    }

    @media (max-width: 1024px) {
      & svg {
        width: 70%;
      }
    }
  }
`
