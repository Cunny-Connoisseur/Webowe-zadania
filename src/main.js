const form = document.getElementById('form')
const thanks = document.getElementById('thanks')
const thanks_content = document.getElementById('thanks-content')

const fields = [
    {
        id: "name",
        placeholder: 'Podaj imię i nazwisko',
        check: value => value.length<3 ? "Imię powinno mieć długość przynajmniej 3" : ""
    },
    {
        id: "email",
        placeholder: 'Podaj email',
        check: value => value.includes('@') && value.includes('.') ? "" : "Email zawiera @ i ."
    },
    {
        id: "title",
        placeholder: 'Wybierz temat wiadomości',
    },
    {
        id: "message",
        placeholder: 'Napisz waidomość',
        check: value => value.length<20 ? "Wiadomość powinna mieć przynajmniej 20 znaków" : ""
    },
]


const show_error = (id, msg)=>{
    const field = document.getElementById(id)
    const error_space = document.getElementById(`error-${id}`)
    error_space.innerHTML = msg
    document.querySelector(`.field > #${id}`).classList.toggle("field-error", msg != '')
}
const check_field = field => {
    const value = document.getElementById(field.id).value.trim()
    let msg = ''
    
    if(value == "") msg = field.placeholder
    else if(field.check) msg = field.check(value)
    
    show_error(field.id, msg)
    return msg == ""
}

const init = () => {
    fields.forEach(field_tab=>{
        const field = document.getElementById(field_tab.id)
        field.addEventListener('input', ()=>{
            if(document.querySelector(`.field > #${field_tab.id}`).classList.contains('field-error')) check_field(field_tab)
        })
    })

    form.addEventListener('submit', e=>{
        e.preventDefault()
        const results = fields.map(check_field)
        const all_good = results.every(result => result)
        
        if(!all_good){
            document.getElementById(fields[results.indexOf(false)].id).focus()
            return
        }

        const name = document.getElementById("name").value.trim()
        const title = document.getElementById("title")
        thanks_content.innerHTML = `${name}, Dziękuję za wiadomość w sprawie ${title.options[title.selectedIndex].innerHTML}. Odpowiem jak najszybciej mogę.`
        form.hidden = true
        thanks.hidden = false
    })
}


init()