import { useNavigate, useParams } from "react-router-dom"
import categories from "../data/categories.json"
import { usePhotos } from "../hooks/usePhotos"
import Card from "../components/helpers/Card"

export default ({}) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {photos, isLoading, error} = usePhotos()
    const photo = photos.find(x => x.id === Number(id))

    return (<>
        {isLoading && (
            <p className="text-muted m-4">
                Ładowanie...
            </p>
        )}

        {error && (
            <div className="alert alert-danger m-4">
                {error}
            </div>
        )}

        {!photo && (
            <div className="container mt-4">
                <div className="alert alert-warning">
                    Nie ma zdjęcia o id = {id}.
                </div>
                
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Wstecz
                </button>
            </div>
        )}
        {!isLoading && !error && photo && (
            <div className="container mt-4">
                <Card
                    category={get_category_text(item.category)}
                    desc={item.desc}
                    src={item.src}
                    title={item.title}
                    color={categories.find(category => category.value === item.category).color}
                    id={`photo_${item.id}-modal`}
                    onDelete={() => onDelete(item.id)}
                    favorite={item.favorite}
                    onToggleFavorite={() => onToggleFavorite(item.id)}
                    minimalistic={minimalistic}
                />
                
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Wstecz
                </button>
            </div>
        )}
    </>)
}

const get_category_text = category => categories.find(item => item.value === category).text
