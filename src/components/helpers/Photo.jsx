import categories from "../../data/categories.json"
import Card from "./Card"

export default ({item, onDelete, onToggleFavorite, minimalistic}) => {

    return (<>
        <div className="card-item mb-3">
            <Card
                category={get_category_text(item.category)}
                desc={item.desc}
                src={item.src}
                title={item.title}
                color={categories.find(category => category.value === item.category).color}
                id={item.id}
                onDelete={() => onDelete(item.id)}
                favorite={item.favorite}
                onToggleFavorite={() => onToggleFavorite(item.id)}
                minimalistic={minimalistic}
            />
        </div>
    </>)
}

const get_category_text = category => categories.find(item => item.value === category).text
