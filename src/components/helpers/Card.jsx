import Modal from "./Modal"

export default ({title, desc, src, category, color, id}) => {

    return (
        <>
            <div class="card">
                <img src={src} class="card-img-top" />
                
                <div class="card-body">
                    <h5 class="card-title">
                        {title}
                    </h5>

                    <span class="badge text-black" style={{backgroundColor: color}}>
                        {category}
                    </span>

                    <p class="card-text text-body-secondary">
                        {desc}
                    </p>
                    
                    <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target={`#${id}`}>
                        Powiększ
                    </button>
                </div>
            </div>

            <Modal close_txt={"Zamknij"} id={id} title={title}>
                <img src={src} class="img-fluid rounded w-100 mb-3" />
                <p class="text-body-secondary">{desc}</p>
            </Modal>
        </>
    ) 
}
