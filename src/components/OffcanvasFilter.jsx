import Offcanvas from "./helpers/Offcanvas"
import categories from "../data/categories.json"

export default ({activeCategory, onChoose}) => {
    const handleToggle = (categoryValue) => {
        onChoose(activeCategory === categoryValue ? 'all' : categoryValue)
    }

    return (<>
        <Offcanvas id={"filter-offcanvas"} title={"Filtry"}>
            <p className="my-3">
                Zaznacz kategorie, które mają zostać wyświetlone:
            </p>

            <div className="my-3">
                {categories.map(item => (
                    
                    <div className="form-check" key={item.value}>
                        <input type="checkbox" className="form-check-input" name={`filter_${item.value}`} value={item.value} 
                        checked={activeCategory === item.value || activeCategory === 'all'}
                        onChange={() => handleToggle(item.value)} />

                        <label className="form-check-label" htmlFor={`filter_${item.value}`}>
                            {item.text}
                        </label>
                    </div>
                ))}
            </div>

            <button type="button" className="btn btn-primary w-100 mt-3" data-bs-dismiss="offcanvas">
                Zamknij
            </button>
        </Offcanvas>
    </>)
}