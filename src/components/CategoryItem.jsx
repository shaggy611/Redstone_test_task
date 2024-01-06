/* eslint-disable react/prop-types */
import { styled } from 'styled-components'
import { useState, useRef, useEffect } from 'react'

function CategoryItem({ categoryTitle, categoryImg, hoveredColor }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const itemRef = useRef(null)

  const handleMouseMove = (e) => {
    if (itemRef !== null) {
      const rect = itemRef.current.getBoundingClientRect()
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    } else {
      return
    }
  }

  useEffect(() => {
    //console.log(itemRef.current)
  }, [])

  return (
    <StyledItem
      color={hoveredColor}
      onMouseMove={handleMouseMove}
      ref={itemRef}>
      <a href='#' className='categoryLink'>
        <span className='title'>{categoryTitle}</span>
        <span className='img'>
          <img src={categoryImg} alt={categoryTitle} />
        </span>
        <div className='cursorIcon'>
          <span
            className='icon'
            style={{
              transform: `translate(${position.x - 220}px, ${
                position.y - 280
              }px)`,
            }}></span>
        </div>
      </a>
    </StyledItem>
  )
}

export default CategoryItem

const StyledItem = styled.div`
  padding: 0 15px;
  position: relative;
  text-align: center;
  overflow: hidden;
  width: calc(33.33% - 20px);
  margin-bottom: 10px;

  & .title {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.2;
    display: block;
    color: #232323;
    height: 25%;
    top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    left: 0;
    width: 100%;
  }

  & .categoryLink {
    -webkit-transition: 0.3s;
    transition: 0.3s;
    background-color: #f8f8f8;
    display: block;
    position: relative;
    z-index: 1;
    padding-top: 125%;
  }

  & .categoryLink::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    right: 0;
    z-index: -1;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    background-color: ${(props) => props.color};
  }

  &:hover {
    @media (min-width: 992px) {
      & .img {
        -webkit-transform: translateY(-20px);
        -ms-transform: translateY(-20px);
        transform: translateY(-20px);
      }

      & .cursorIcon .icon {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &:hover .categoryLink::before {
    height: 100%;
  }

  & .img {
    -webkit-transition: 0.6s;
    transition: 0.6s;
    width: 100%;
    height: 75%;
    bottom: 0;
    position: absolute;
    left: 0;

    & img {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      max-width: 80%;
      max-height: 80%;
      width: auto;
      vertical-align: top;
      -webkit-transition: opacity 0.25s;
      transition: opacity 0.25s;
    }
  }

  & .cursorIcon {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;

    & .icon {
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -60px 0 0 -60px;
      width: 120px;
      height: 120px;
      border-radius: 100%;
      color: #fff;
      border: 1px solid #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      font-weight: 600;
      font-style: normal;
      font-size: 14px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      /* transform: translate(-200px, -56px); */

      &::before {
        content: '';
        display: block;
        position: absolute;
        background-color: #fff;
        border: none;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 20px;
        margin-top: -10px;
        margin-left: -1px;
      }

      &::after {
        width: 20px;
        height: 2px;
        margin-top: -1px;
        margin-left: -10px;
        content: '';
        display: block;
        position: absolute;
        background-color: #fff;
        border: none;
        top: 50%;
        left: 50%;
      }

      @media (min-width: 992px) {
        opacity: 0;
        visibility: hidden;
        -webkit-transition: opacity 0.3s, visibility 0.3s;
        transition: opacity 0.3s, visibility 0.3s;
      }
    }
  }
`
