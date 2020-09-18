import 'bootstrap'
import "@fortawesome/fontawesome-free/js/all";
import './styles/main.scss'


const loading = document.querySelector('.loading')
const searchForm = document.getElementById('searchForm')
const output = document.querySelector('.output')
const search = document.getElementById('search')
const feedback = document.querySelector('.feedback')

const base = `https://en.wikipedia.org/w/api.php`
const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=`

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const value = search.value

    if(value === "") {
        showFeedback("Please enter a valid search value")
    } else {
        search.value = ""
        // ajax
    }
})


const showFeedback = (text) => {
    feedback.classList.add('showItem')
    feedback.innerHTML = `<p>${text}</p>`

    setTimeout(() => {
        feedback.classList.remove('showItem')
    }, 3000)
}