import { useState } from 'react'
import { Modal as BootstrapModal } from 'bootstrap'
import Modal from "./helpers/Modal"
import categories from "../data/categories.json"

const FORM_INITIAL = { title: '', category: '', src: '', desc: '' }

export default ({ onAdd }) => {
    const [formData, setFormData] = useState(FORM_INITIAL)

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd({ ...formData })
        setFormData(FORM_INITIAL)
        BootstrapModal.getInstance(document.getElementById('new_image-modal'))?.hide()
    }

    return (<>
        <Modal title={"Dodaj zdjęcie"} id={"new_image-modal"} close_txt={"Anuluj"} buttons={(
            <button type='submit' form="add-photo-form" className="btn btn-primary">Zapisz</button>
        )}>
            <form id="add-photo-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <label htmlFor="title" className='form-label'>
                            Tytuł
                        </label>

                        <input type="text" name="title" id="title" className='form-control' value={formData.title} 
                            onChange={handleChange('title')}/>
                        
                        <div className="invalid-feedback">
                            Podaj tytuł
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-6">
                        <label htmlFor="category" className='form-label'>
                            Kategoria
                        </label>

                        <select name="category" id="category" className='form-select' value={formData.category} onChange={handleChange('category')}>
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
                        <label htmlFor="src" className='form-label'>
                            Link do zdjęcia
                        </label>

                        <input type="text" name="src" id="src" className='form-control' placeholder="https://..." value={formData.src} onChange={handleChange('src')} />
                    </div>
                </div>
                
                <div className="row my-2">
                    <div className="col-12">
                        <label htmlFor="desc" className='form-label'>
                            Opis
                        </label>

                        <textarea name="desc" id="desc" className='form-control' rows={5} value={formData.desc} 
                            onChange={handleChange('desc')} />
                        
                        <div className="form-text">
                            Krótki opis zdjęcia
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    </>)
}