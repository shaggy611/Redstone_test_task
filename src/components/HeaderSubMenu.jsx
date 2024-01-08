import { styled } from 'styled-components'

function HeaderSubMenu() {
  return (
    <StyledHeaderSubMenu>
      <ul>
        <li>
          <a href='#'>Створення сайтів</a>
        </li>
        <li>
          <a href='#'>Брендинг та дизайн</a>
        </li>
        <li>
          <a href='#'>CRM системи</a>
        </li>
        <li>
          <a href='#'>Інтернет магазин</a>
        </li>
        <li>
          <a href='#'>Лендінг</a>
        </li>
        <li>
          <a href='#'>Підтримка сайту</a>
        </li>
        <li>
          <a href='#'>Редизайн</a>
        </li>
        <li>
          <a href='#'>Розробка додатків</a>
        </li>
        <li>
          <a href='#'>Пошукова оптимізація</a>
        </li>
      </ul>
    </StyledHeaderSubMenu>
  )
}

export default HeaderSubMenu

const StyledHeaderSubMenu = styled.div`
  transition: opacity 0.3s ease-in;
  /* opacity: 1; */
  position: absolute;
  pointer-events: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.02);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.02);
  padding: 20px 20px 20px 20px;
  left: -20px;
  width: 260px;
  background: #fff;
  -webkit-clip-path: inset(0 0 100% 0);
  clip-path: inset(0 0 100% 0);
  z-index: 99;

  & ul {
    list-style: none;
    text-align: left;

    & li {
      display: inline-block;
      vertical-align: top;
      margin: 5px 32px;
      cursor: pointer;
      font-size: 13px;
      position: relative;
      margin-left: 0;
      margin-right: 15px;
      margin-top: 10px;
    }
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 10px;
    bottom: 0;
    background-color: #f8f8f8;
    pointer-events: none;
  }
`
