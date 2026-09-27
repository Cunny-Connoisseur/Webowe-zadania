export default ({searchText, setSearchText}) => {

    return (<>
        <input type="text" name="search" id="search" className="form-control my-3" placeholder="Szukaj" 
            value={searchText} onChange={e => setSearchText(e.target.value)} />
    </>)
}