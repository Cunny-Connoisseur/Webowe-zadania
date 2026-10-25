import { useState } from "react"
import { usePhotos } from "../hooks/usePhotos"
import Header from "../components/Header"
import CategoryBar from "../components/CategoryBar"
import Photos from "../components/Photos"
import PhotoOfTheDay from "../components/PhotoOfTheDay"
import { deletePhoto, toggleFavorite } from "../services/photos"

export default ({}) => {
    const {photos, setPhotos, isLoading, error} = usePhotos()
    const [activeCategory, setActiveCategory] = useState('all')
    const visible = activeCategory === 'all' ? photos : photos.filter(photo => photo.category === activeCategory)

    return (<>
        <div className="container-fluid p-4">
            <Header />

            <PhotoOfTheDay onDelete={id => setPhotos(deletePhoto(id))} onToggleFavorite={id => setPhotos(toggleFavorite(id))} />
            
            {isLoading && (
                <div className="text-body-secondary my-2 text-center mt-5">
                <div className="spinner-border text-primary" role='status'></div>
                <p className='text-muted mt-1'>Ładowanie galerii</p>
                </div>
            )}
            
            {photos.length == 0 && !isLoading && (
                <div className="alert alert-warning card-item mt-5">
                    Brak zdjęć w całej galerii.
                </div>
            )}

            <CategoryBar activeCategory={activeCategory} onChoose={setActiveCategory} />

            {!isLoading && !photos.length == 0 && (<>
                <p className="text-body-secondary my-2">
                    Wyświetlono {visible.length} z {photos.length} zdjęć
                </p>
                
                <Photos photos={visible} onDelete={id => setPhotos(deletePhoto(id))} onToggleFavorite={id => setPhotos(toggleFavorite(id))} />
            </>)}
        </div>
        
    </>)
}