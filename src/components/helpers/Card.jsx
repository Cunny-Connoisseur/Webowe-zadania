import Modal from "./Modal"

export default ({title, desc, src, category, color, id}) => {

    return (
        <>
            <div className="card">
                <img src={src} className="card-img-top" />
                
                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                    </h5>

                    <span className="badge text-black" style={{backgroundColor: color}}>
                        {category}
                    </span>

                    <p className="card-text text-body-secondary">
                        {desc}
                    </p>
                    
                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target={`#${id}`}>
                        Powiększ
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
