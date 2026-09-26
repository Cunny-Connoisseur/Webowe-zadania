import './App.css'
import CategoryBar from './components/CategoryBar'
import Footer from './components/Footer'
import Header from './components/Header'
import ModalAddPhoto from './components/ModalAddPhoto'
import Navbar from './components/Navbar'
import OffcanvasFilter from './components/OffcanvasFilter'
import Photos from './components/Photos'

export default function App() {

  return (<>
    <Navbar name={"Galeria zdjęć"} />

    <div className="container-fluid p-4">
      <Header  />

      <CategoryBar />
      
      <Photos />

      <Footer />
    </div>

    <ModalAddPhoto />
    <OffcanvasFilter />
  </>)
}
