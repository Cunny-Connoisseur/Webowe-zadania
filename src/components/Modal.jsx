export default ({children, buttons, id, title, close_txt}) => {

    return (<>
        <div class="modal fade" id={id} tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">{title}</h1>

                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        {children}
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{close_txt}</button>
                        {buttons}
                    </div>
                </div>
            </div>
        </div>
    </>)
}