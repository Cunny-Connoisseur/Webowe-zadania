export default ({children, id, title}) => {

    return (<>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id={id}>
            <div className="offcanvas-header">
                <h1 className="offcanvas-title">{title}</h1>

                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            
            <div className="offcanvas-body">
                {children}
            </div>
        </div>
    </>)
}