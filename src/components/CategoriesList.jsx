import CategoryItem from './CategoryItem'
import { styled } from 'styled-components'
import foodImg from '../assets/redstone-food-delivery.png'
import buildImg from '../assets/category-img-6.png'
import appdImg from '../assets/category-img-5.png'
import webSolutionImg from '../assets/category-img-8.webp'
import autoImg from '../assets/redstone-auto.png'
import brandImg from '../assets/category-img-3.webp'

function CategoriesList() {
  return (
    <StyledCategoriesList>
      <CategoryItem
        hoveredColor='#eacc14'
        categoryTitle='Доставка їжі'
        categoryImg={foodImg}
      />
      <CategoryItem
        hoveredColor='#389727'
        categoryTitle='Будівництво'
        categoryImg={buildImg}
      />
      <CategoryItem
        hoveredColor='#3573bc'
        categoryTitle='APP'
        categoryImg={appdImg}
      />
      <CategoryItem
        hoveredColor='#b30053'
        categoryTitle='WEB Solution'
        categoryImg={webSolutionImg}
      />
      <CategoryItem
        hoveredColor='#21487d'
        categoryTitle='Авто'
        categoryImg={autoImg}
      />
      <CategoryItem
        hoveredColor='#eacc14'
        categoryTitle='Брендування'
        categoryImg={brandImg}
      />
    </StyledCategoriesList>
  )
}

export default CategoriesList

const StyledCategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
