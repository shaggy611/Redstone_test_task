import { styled } from 'styled-components'
import { StyledBUtton } from './PopupButton'

function BannerPortfolioButton() {
  return <StyledButton href='#'>НАШІ РОБОТИ</StyledButton>
}

export default BannerPortfolioButton

const StyledButton = styled(StyledBUtton).attrs({ as: 'a' })`
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
`
