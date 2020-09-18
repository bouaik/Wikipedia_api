import 'bootstrap'
import "@fortawesome/fontawesome-free/js/all";
import './styles/main.scss'


const loading = document.querySelector('.loading')
const searchForm = document.getElementById('searchForm')
const output = document.querySelector('.output')
const search = document.getElementById('search')
const feedback = document.querySelector('.feedback')

const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch='

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const value = search.value

    if(value === "") {
        showFeedback("Please enter a valid search value")
    } else {
        search.value = ""
        // ajax
        ajaxWiki(value)
    }
})


const showFeedback = (text) => {
    feedback.classList.add('showItem')
    feedback.innerHTML = `<p>${text}</p>`

    setTimeout(() => {
        feedback.classList.remove('showItem')
    }, 3000)
}

const ajaxWiki = (search) => {
    output.innerHTML = ""
    loading.classList.add('showItem')

    const wikiURL = `${url}${search}`

    fetch(wikiURL)
        .then(data => data.json())
        .then(data => displayData(data))
        .catch(error => console.log(error))
}

const displayData = (data) => {
    loading.classList.remove('showItem')
    const { search:results } = data.query

    let info = ''

    results.forEach(result => {
        const {title, snippet, pageid:link} = result 
        info += `<div class="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div class="card card-body">
                        <h1 class="card-title blueText">${title}</h1>
                        <p>${snippet}</p>
                        <a href="http://en.wikipedia.org/?curid=${link}" target="_blank" class="my-2 text-capitalize">read
                        more...</a>
                    </div>
                </div>`
    });
    output.innerHTML = info
}