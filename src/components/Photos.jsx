import Photo from "./helpers/Photo"

export default ({photos, onDelete, onToggleFavorite}) => {
    return (
        <div className="cards-container mt-3" id="gallery">

            {photos.length === 0 && (
                <div className="alert alert-warning card-item">
                    Brak zdjęć w wybranej kategorii.
                </div>
            )}

            {photos.length !== 0 && photos.map(item => (
                <Photo item={item} onDelete={onDelete} onToggleFavorite={onToggleFavorite} key={item.id} />
            ))}
        </div>
    )
}
