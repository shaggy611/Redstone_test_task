import { createContext, useState } from 'react'

export const PopupContext = createContext()

// eslint-disable-next-line react/prop-types
export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  )
}
