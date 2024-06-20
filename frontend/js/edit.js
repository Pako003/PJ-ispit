const params = new URLSearchParams(window.location.search)
const id = params.get('id')

if (id == null || id == '')
    window.location.href = './index.html'


const memberId = document.getElementById('id')
const name = document.getElementById('name')
const surmane = document.getElementById('surname')
const age = document.getElementById('age')
const createdAt = document.getElementById('createdAt')


fetch('http://localhost:8080/api/member/' + id)
    .then(rsp => {
        if (rsp.status == 200)
            return rsp.json()
        alert('Član nije pronađen!')
        window.location.href = './index.html'
    })
    .then(data => {
        memberId.value = data.id
        name.value = data.name
        surname.value = data.surname
        age.value = data.age
        createdAt.value = data.createdAt.split('T')[0]

        document.getElementById('edit').addEventListener('click', () => {

            if (age.value < 18) {
                alert("Član mora biti punoletan")
                return
            }
            
            fetch(`http://localhost:8080/api/member/${data.id}`, {
                method: 'PUT',
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
                    alert("Izmena neuspešna!")
                })
        })
    })