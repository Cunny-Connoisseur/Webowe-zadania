import photos from "../data/photos.json"
import categories from "../data/categories.json"
import Card from "./helpers/Card"

export default () => {
    return (
        <div className="cards-container mt-3" id="gallery">
            {photos.map(item => (
                <div className="card-item mb-3" key={item.id}>
                    <Card
                        category={get_category_text(item.category)}
                        desc={item.desc}
                        src={item.src}
                        title={item.title}
                        color={categories.find(category => category.value === item.category).color}
                    />
                </div>
            ))}
        </div>
    )
}

const get_category_text = category => categories.find(item => item.value === category).text