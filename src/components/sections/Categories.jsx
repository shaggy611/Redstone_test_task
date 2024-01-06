import { styled } from 'styled-components'
import WOW from 'wow.js'
import { useEffect } from 'react'
import CategoriesList from '../CategoriesList'
import CategoriesButton from '../CategoriesButton'

function Categories() {
  useEffect(() => {
    const wow = new WOW()
    wow.init()
  }, [])
  return (
    <StyledCategories>
      <div className='container'>
        <div className='block-title'>
          <h2 className='wow fadeInUp'>
            Ефектні та ефективні веб і мобайл рішення із зануренням у ваш бізнес
          </h2>

          <p className='wow fadeInUp' data-wow-delay='0.3s'>
            Ми знаємо болі у Вашій ніші! У нашому арсеналі є всі інструменти для
            їх вирішення: аналіз, брендинг, розробка сайту, створення app і
            технічна підтримкаі.
          </p>
        </div>
        <div className='wow fadeInUp' data-wow-delay='0.3s'>
          <CategoriesList />
        </div>

        <CategoriesButton />
      </div>
    </StyledCategories>
  )
}

export default Categories

const StyledCategories = styled.section`
  & .container {
    height: auto;
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1819px) {
      height: auto;
      min-height: 400px;
    }
  }

  & .block-title {
    margin-bottom: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    & h2 {
      font-size: 40px;
      font-weight: 600;
      max-width: 57%;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 57%;
      flex: 1 1 57%;
    }

    & p {
      flex: 1;
      font-size: 16px;
      font-weight: 300;
      padding-left: 9%;
      line-height: 1.6;
      color: rgba(66, 66, 66, 0.9);
      -webkit-transition: 0.6s 0.1s;
      transition: 0.6s 0.1s;

      @media (max-width: 1819px) {
        padding-left: 5%;
        font-size: 15px;
      }
    }
  }
`
