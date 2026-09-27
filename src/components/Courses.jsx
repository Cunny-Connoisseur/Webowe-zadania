import { useRef, useState } from "react"
import Search from "./Search"
import FormEnroll from "./FormEnroll"

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
    const [searchText, setSearchText] = useState('')
    const [sortAsc, setSortAsc] = useState(true)

    const visible = course_list.map((course, idx) => ({
        course, 
        nr: idx + 1
    })).filter(({course}) => 
        course.toLowerCase().includes(searchText.toLocaleLowerCase()
    )).sort((x, y) => 
        sortAsc ? x.course.localeCompare(y.course) : y.course.localeCompare(x.course)
    )

    return (<>
        <h1 className="my-2">
            Zapisy na kursy
        </h1>

        <h2 className="fs-5 fw-medium text-secondary-emphasis">
            Liczba kursów: {course_list.length}
        </h2>

        <Search searchText={searchText} setSearchText={setSearchText} />
        
        <button type="button" className="btn btn-outline-secondary text-nowrap" onClick={() => setSortAsc(x => !x)}>
            Sortuj {sortAsc ? 'Z->A' : 'A->Z'}
        </button>

        <p className="text-body-secondary mt-5 mb-0">
            Wyświetlono {visible.length} z {course_list.length} kursów
        </p>

        <ol className="my-3">
            {visible.map(({course, nr}) => (
                <li key={nr} value={nr}>
                    {course}
                </li>
            ))}
        </ol>

        <FormEnroll course_list={course_list} course_nr={course_nr} full_name={full_name} />
    </>)
}