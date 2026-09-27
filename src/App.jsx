import './App.css'
import CategoryBar from './components/CategoryBar'
import Footer from './components/Footer'
import Header from './components/Header'
import ModalAddPhoto from './components/ModalAddPhoto'
import Navbar from './components/Navbar'
import OffcanvasFilter from './components/OffcanvasFilter'
import Photos from './components/Photos'
import photos_file from "./data/photos.json"
import { useState } from 'react'

export default function App() {
  const [photos, setPhotos] = useState(photos_file)
  const [activeCategory, setActiveCategory] = useState('all')
  const visible = activeCategory === 'all' ? photos : photos.filter(photo => photo.category === activeCategory)

  const handleDeletePhoto = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id))
  }
  
  const handleAddPhoto = (newPhoto) => {
    const newId = Math.max(...photos.map(p => p.id), 0) + 1
    setPhotos([...photos, { ...newPhoto, id: newId, favorite: false }])
  }

  
  return (<>
    <Navbar name={"Galeria zdjęć"} />

    <div className="container-fluid p-4">
      <Header  />

      <CategoryBar activeCategory={activeCategory} onChoose={setActiveCategory} />
      
      <Photos photos={visible} onDelete={handleDeletePhoto} />

      <Footer />
    </div>

    <ModalAddPhoto onAdd={handleAddPhoto} />
    <OffcanvasFilter activeCategory={activeCategory} onChoose={setActiveCategory} />
  </>)
}
