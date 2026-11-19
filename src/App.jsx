import { initialPhotos } from './data/photos'

export default function App() {
  const photos = initialPhotos
  return (
    <div className="container mt-4">
      <h1>Kategorie zdjęć</h1>

      <div className="row g-3">
        {photos.map(photo => (
          <div key={photo.id} className="col-12 col-sm-6 col-md-4">
            <img className="img-fluid rounded" alt={photo.alt} src={photo.filename} />
            <h4 className="h6 mt-2">Pobrań: {photo.downloads}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
