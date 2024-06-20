const search = document.getElementById('search')
const url = new URLSearchParams(window.location.search)
const searchParam = url.get('search')

if (searchParam != '' && searchParam != null) {
    search.value = searchParam
}

document.getElementById('search-btn').addEventListener('click', () => {
    const searchValue = search.value.trim()
    if (searchValue == '' || searchValue == null) return
    window.location.href = `./index.html?search=${searchValue}`
})
