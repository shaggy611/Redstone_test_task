import './App.css'
import Header from './components/sections/Header'
import Banner from './components/sections/Banner'
import Categories from './components/sections/Categories'
import PopUp from './components/sections/PopUp'
import { PopupProvider } from './context/popupContext'

function App() {
  return (
    <>
      <PopupProvider>
        <Header />

        <main>
          <Banner />
          <Categories />
          <PopUp opened={false} />
        </main>
      </PopupProvider>
    </>
  )
}

export default App
