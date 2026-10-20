import './App.css'
import CategoryBar from './components/CategoryBar'
import Footer from './components/Footer'
import Header from './components/Header'
import ModalAddPhoto from './components/ModalAddPhoto'
import Navbar from './components/Navbar'
import OffcanvasFilter from './components/OffcanvasFilter'
import PhotoOfTheDay from './components/PhotoOfTheDay'
import Photos from './components/Photos'
import { useEffect, useState } from 'react'

export default function App() {
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const visible = activeCategory === 'all' ? photos : photos.filter(photo => photo.category === activeCategory)
  
  useEffect(() => {handleFetch()}, [])
 
  const handleFetch = async () => {
    try {
      setIsLoading(true)
      
      const res = await fetch('/photos.json')
      
      if(!res.ok) throw new Error(`Błąd serwera: ${res.status}`)
      
      const data = await res.json()
      setPhotos(data)
    } catch(err) {
      setIsError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleDeletePhoto = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id))
  }

  const handleAddPhoto = (newPhoto) => {
    const newId = Math.max(...photos.map(p => p.id), 0) + 1
    setPhotos([...photos, { ...newPhoto, id: newId, favorite: false }])
  }

  const handleToggleFavorite = (id) => {
    setPhotos(photos.map(photo => 
      photo.id === id ? { ...photo, favorite: !photo.favorite } : photo
    ))
  }

  return (<>
    <Navbar name={"Galeria zdjęć"} />

    <div className="container-fluid p-4">
      <Header  />

      <PhotoOfTheDay onDelete={handleDeletePhoto} onToggleFavorite={handleToggleFavorite} />

      <CategoryBar activeCategory={activeCategory} onChoose={setActiveCategory} />
      
      {isLoading && (
        <div className="text-body-secondary my-2 text-center mt-5">
          <div className="spinner-border text-primary" role='status'></div>
          <p className='text-muted mt-1'>Ładowanie galerii</p>
        </div>
      )}

      {isError && (
        <div className="text-body-secondary my-2 text-center mt-5">
          <p className="text-danger my-2">
            Nie udało się pobrać danych: {isError}
          </p>
        </div>
      )}

      {photos.length == 0 && !isLoading && !isError && (
        <div className="alert alert-warning card-item mt-5">
            Brak zdjęć w całej galerii.
        </div>
      )}

      {!isLoading && !isError && !photos.length == 0 && (<>
        <p className="text-body-secondary my-2">
            Wyświetlono {visible.length} z {photos.length} zdjęć
        </p>
        <Photos photos={visible} onDelete={handleDeletePhoto} onToggleFavorite={handleToggleFavorite} />
      </>)}
      

      <Footer />
    </div>

    <ModalAddPhoto onAdd={handleAddPhoto} />
    <OffcanvasFilter activeCategory={activeCategory} onChoose={setActiveCategory} />
  </>)
}
