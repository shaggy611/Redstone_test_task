import styled from 'styled-components'

function PopupButton() {
  return <StyledBUtton type='button'>Задати запитання</StyledBUtton>
}

export default PopupButton

export const StyledBUtton = styled.button`
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  white-space: nowrap;
  padding: 18px 37px;
  font-weight: 600;
  color: #fff;
  border: 1px solid #e70000;
  position: relative;
  z-index: 1;
  line-height: 1.6;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #e70000;
    background-color: #fff;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -10px;
    right: -10px;
    bottom: -10px;
    top: -10px;
    background-color: #e70000;
    z-index: -1;
    transition: 0.4s;
  }

  &:hover::before {
    -webkit-transform: translateY(100%);
    -ms-transform: translateY(100%);
    transform: translateY(100%);
  }

  @media (max-width: 1819px) {
    font-size: 12px;
    padding: 13px 26px;
  }
`
