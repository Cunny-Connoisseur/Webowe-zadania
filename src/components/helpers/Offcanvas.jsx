export default ({children, id, title}) => {

    return (<>
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id={id}>
            <div class="offcanvas-header">
                <h1 class="offcanvas-title">{title}</h1>

                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            
            <div class="offcanvas-body">
                {children}
            </div>
        </div>
    </>)
}