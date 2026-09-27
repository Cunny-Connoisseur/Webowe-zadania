import Modal from "./Modal"

export default ({title, desc, src, category, color, id, favorite, onDelete, onToggleFavorite}) => {

    return (
        <>
            <div className="card">
                <img src={src} className="card-img-top" />
                
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start">
                        <h5 className="card-title">
                            {title}
                        </h5>

                        <button type="button" className="btn btn-link p-0 me-2 text-decoration-none fs-4 lh-1" onClick={onToggleFavorite}>
                            {favorite ? (
                                <i className="bi bi-star-fill text-warning" />
                            ) : (
                                <i className="bi bi-star text-secondary" />
                            )}
                        </button>
                    </div>

                    <span className="badge text-black" style={{backgroundColor: color}}>
                        {category}
                    </span>

                    <p className="card-text text-body-secondary">
                        {desc}
                    </p>
                    
                    <button type="button" className="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target={`#${id}`}>
                        Powiększ
                    </button>

                    <button type="button" className="btn btn-outline-danger" onClick={onDelete}>
                        Usuń
                    </button>
                </div>
            </div>

            <Modal close_txt={"Zamknij"} id={id} title={title}>
                <img src={src} className="img-fluid rounded w-100 mb-3" />
                <p className="text-body-secondary">{desc}</p>
            </Modal>
        </>
    ) 
}
