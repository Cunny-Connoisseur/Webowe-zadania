const course_list = [
    "Programowanie w C++",
    "Programowanie w C#",
    "Programowanie w Python",
    "Wprowadzenie do React",
    "Wprowadzenie do SQL",
    "CRUD i Bazy Danych",
]

export default ({}) => {

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
    </>)
}