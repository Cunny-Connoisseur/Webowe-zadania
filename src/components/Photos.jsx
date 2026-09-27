import categories from "../data/categories.json"
import Card from "./helpers/Card"

export default ({photos, onDelete}) => {
    return (
        <div className="cards-container mt-3" id="gallery">

            {photos.length === 0 && (
                <div className="alert alert-warning card-item">
                    Brak zdjęć w wybranej kategorii.
                </div>
            )}

            {photos.length !== 0 && photos.map(item => (
                <div className="card-item mb-3" key={item.id}>
                    <Card
                        category={get_category_text(item.category)}
                        desc={item.desc}
                        src={item.src}
                        title={item.title}
                        color={categories.find(category => category.value === item.category).color}
                        id={`photo_${item.id}-modal`}
                        onDelete={() => onDelete(item.id)}
                    />
                </div>
            ))}
        </div>
    )
}

const get_category_text = category => categories.find(item => item.value === category).text