import { styled } from 'styled-components'
import BannerPortfolioButton from '../BannerPortfolioButton'
import LogosGroup from '../LogosGroup'

function Banner() {
  return (
    <StyledBanner>
      <div className='container'>
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
                <tspan className='text-bold'>18</tspan>
              </text>
            </svg>
          </div>

          <p className="subtext"></p>
        </div>
      </div>
    </StyledBanner>
  )
}

export default Banner

const StyledBanner = styled.section`
  & .container {
    height: calc(100vh - 130px);
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1819px) {
      height: calc(100vh - 100px);
      min-height: 400px;
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

      & span {
        color: #e70000;
        font-weight: inherit;
      }

      @media (max-width: 1819px) {
        font-size: 46px;
        top: 4px;
      }
    }
  }

  & .experience {
    position: relative;
    height: 100%;
    margin-bottom: 20px;
  }
`
