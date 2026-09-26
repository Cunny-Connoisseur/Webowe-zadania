import categories from "../data/categories.json"

export default ({}) => {

    return (
        <>
            <div id="categories" className="row gap-2 mt-4">
                <div className="col-auto p-0">
                    <button type="button" className="btn btn-outline-primary active">
                        Wszystkie
                    </button>
                </div>

                {categories.map(item => (
                <div className="col-auto p-0" key={item.value}>
                    <button type="button" className="btn btn-outline-primary">
                        {item.text}
                    </button>
                </div>
                ))}
            </div> 
        </>
    ) 
}
