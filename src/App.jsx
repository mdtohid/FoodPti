import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Popular from './Components/Popular/Popular'
import boyAvatar from './image/boyAvatar.png'
import Recommended from './Components/Recommended/Recommended'
import Intro from './Components/Intro/Intro'


function App() {
  return (
    <div className='bg-[#EEEFF0]'>
      <Header></Header>
      <Intro></Intro>
      <Popular></Popular>
      <Recommended></Recommended>
      <Footer></Footer>
    </div>
  )
}

export default App
