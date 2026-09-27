export default ({full_name, course_nr, course_list}) => {
    const handleSubmit = e => {
        e.preventDefault()

        const course = course_list[Number(course_nr.current.value) - 1]

        if(course) {
            console.log(course)
        } else {
            console.log("Nieprawidłowy nr kursu")
        }
    }
    
    return (<>
        <form onSubmit={handleSubmit} className="mt-5">
            <div className="form-group my-2">
                <label htmlFor="full_name">
                    Imię i nazwisko: 
                </label>

                <input type="text" id="full_name" className="form-control" ref={full_name} />
            </div>

            <div className="form-group my-2">
                <label htmlFor="course_nr">
                    Numer kursu:
                </label>
                
                <input type="number" id="course_nr" className="form-control" ref={course_nr} />
            </div>

            <div className="form-group my-4 justify-content-center d-flex">
                <button type="submit" className="btn btn-outline-primary">
                    Zapisz Się
                </button>
            </div>
        </form>
    </>)
}