import { useRef } from "react"

const course_list = [
    "Programowanie w C++",
    "Programowanie w C#",
    "Programowanie w Python",
    "Wprowadzenie do React",
    "Wprowadzenie do SQL",
    "CRUD i Bazy Danych",
]

export default ({}) => {
    const full_name = useRef(undefined)
    const course_nr = useRef(undefined)

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
        <h1 className="my-2">
            Zapisy na kursy
        </h1>

        <h2 className="fs-5 fw-medium text-secondary-emphasis">
            Liczba kursów: {course_list.length}
        </h2>

        <ol className="mt-3">
            {course_list.map((item, idx) => (
                <li key={idx}>
                    {item}
                </li>
            ))}
        </ol>

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