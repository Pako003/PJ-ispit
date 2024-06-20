const name = document.getElementById('name')
const surmane = document.getElementById('surname')
const age = document.getElementById('age')


document.getElementById('edit').addEventListener('click', () => {
    if (name.value == '' || name.value == null) {
        alert("Popunite sva polja!")
        return
    }
    if (surname.value == '' || surname.value == null) {
        alert("Popunite sva polja!")
        return
    }
    if (age.value == '' || age.value == null) {
        alert("Popunite sva polja!")
        return
    }
    if (age.value < 18) {
        alert("Član mora biti punoletan")
        return
    }

    fetch('http://localhost:8080/api/member', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name.value,
            surname: surname.value,
            age: age.value,
        })
    })
        .then(rsp => {
            if (rsp.ok) {
                window.location.href = './index.html'
                return
            }
            alert("Dodavanje člana neuspešna!")
        })
})