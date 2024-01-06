import { styled } from 'styled-components'
import { StyledBUtton } from './PopupButton'

function CategoriesButton() {
  return <StyledButton href='#'>ПЕРЕГЛЯНУТИ ВСІ РОБОТИ</StyledButton>
}

export default CategoriesButton

const StyledButton = styled(StyledBUtton).attrs({ as: 'a' })`
  color: #e70000;
  background-color: #fff;
  width: fit-content;
  min-height: 48px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;

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
