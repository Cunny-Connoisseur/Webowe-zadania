import './App.css'
import CategoryBar from './components/CategoryBar'
import Header from './components/Header'
import ModalAddPhoto from './components/ModalAddPhoto'
import Navbar from './components/Navbar'
import OffcanvasFilter from './components/OffcanvasFilter'
import Photos from './components/Photos'

export default function App() {

  return (<>
    <Navbar name={"Galeria"} />

    <div className="container-fluid p-4">
      <Header  />

      <CategoryBar />
      
      <Photos />
    </div>

    <ModalAddPhoto />
    <OffcanvasFilter />
  </>)
}
