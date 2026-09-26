export default ({title, desc, src, category, color}) => {

    return (
        <>
            <div class="card">
                <img src={src} class="card-img-top" />
                
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>

                    <span class="badge text-black" style={{backgroundColor: color}}>{category}</span>

                    <p class="card-text text-body-secondary">{desc}</p>
                    
                    <a href="#" class="btn btn-outline-primary">Powiększ</a>
                </div>
            </div>
        </>
    ) 
}
