import Modal from "./Modal"
import categories from "../data/categories.json"

export default ({}) => {

    return (<>
        <Modal title={"Dodaj zdjęcie"} id={"new_image-modal"} close_txt={"Anuluj"} buttons={(<>
            <button type='submit' className="btn btn-primary">Zapisz</button>
        </>)}>
            <form>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <label htmlFor="title" className='form-label'>
                            Tytuł
                        </label>

                        <input type="text" name="title" className='form-control is-invalid' />
                        
                        <div className="invalid-feedback">
                            Podaj tytuł
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-6">
                        <label htmlFor="category" className='form-label'>
                            Kategoria
                        </label>

                        <select type="text" name="category" className='form-select'>
                            <option value="" disabled>
                                -- Wybierz kategorię --
                            </option>
                            
                            {categories.map(item => (
                                <option value={item.value} key={item.value}>
                                    {item.text}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                
                <div className="row my-2">
                    <div className="col-12">
                        <label htmlFor="file" className='form-label'>
                            Plik
                        </label>

                        <input type="file" accept="Image/*" name="file" className='form-control' />
                        
                        <div className="form-text">
                            Jakikolwiek format obrazu
                        </div>
                    </div>
                </div>
                
                <div className="row my-2">
                    <div className="col-12">
                        <label htmlFor="desc" className='form-label'>
                            Opis
                        </label>

                        <textarea name="desc" className='form-control' rows={5} />
                        
                        <div className="form-text">
                            Krótki opis zdjęcia
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    </>)
}