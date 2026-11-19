import { useState } from 'react'
import { initialPhotos } from './data/photos'

const categories = [1, 2, 3]
const categoryNames = { 1: 'Kwiaty', 2: 'Zwierzęta', 3: 'Samochody' }

export default function App() {
  const [photos, setPhotos] = useState(initialPhotos)
  const [activeCategories, setActiveCategories] = useState(categories)

  const visiblePhotos = photos.filter(photo => activeCategories.includes(photo.category))

  const handleToggleCategory = (category) => {
    setActiveCategories(current => {
      if(current.includes(category)) return current.filter(activeCategory => activeCategory !== category)

      return [...current, category]
    })
  }

  const handleDownload = (id) => {
    setPhotos(photos => photos.map(photo =>
      photo.id === id ? {...photo, downloads: photo.downloads + 1} : photo
    ))
  }

  return (
    <div className="container mt-4">
      <h1>Kategorie zdjęć</h1>

      <div className="d-flex flex-wrap gap-3 mb-3">
        {categories.map(category => {
          const inputId = `category-${category}`

          return (
            <div className="form-check form-switch" key={category}>
              <input className="form-check-input" type="checkbox" role="switch" id={inputId} checked={activeCategories.includes(category)} onChange={() => handleToggleCategory(category)} />
              <label className="form-check-label" htmlFor={inputId}>{categoryNames[category]}</label>
            </div>
          )
        })}
      </div>

      <div className="row g-3">
        {visiblePhotos.map(photo => (
          <div key={photo.id} className="col-12 col-sm-6 col-md-4">
            <img className="img-fluid rounded" alt={photo.alt} src={photo.filename} />
            <h4 className="h6 mt-2">Pobrań: {photo.downloads}</h4>
            <button type="button" className="btn btn-success btn-sm" onClick={() => handleDownload(photo.id)}>Pobierz</button>
          </div>
        ))}
      </div>
    </div>
  )
}
