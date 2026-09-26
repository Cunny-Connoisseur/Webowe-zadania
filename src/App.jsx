// import './App.css'
import Header from './components/Header'
import ModalAddPhoto from './components/ModalAddPhoto'
import Navbar from './components/Navbar'
import OffcanvasFilter from './components/OffcanvasFilter'

export default function App() {

  return (<>
    <Navbar name={"Galeria"} />
    <div className="container-fluid p-4">
      <Header  />
    </div>

    <ModalAddPhoto />
    <OffcanvasFilter />
  </>)
}
