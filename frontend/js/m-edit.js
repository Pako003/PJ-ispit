const params = new URLSearchParams(window.location.search)
const id = params.get('id')

if (id == null || id == '')
    window.location.href = './membership.html'


const membershipId = document.getElementById('id')
const name = document.getElementById('name')
const createdAt = document.getElementById('createdAt')


fetch('http://localhost:8080/api/membership/' + id)
    .then(rsp => {
        if (rsp.status == 200)
            return rsp.json()
        alert('Članarina nije pronađena!')
        window.location.href = './membership.html'
    })
    .then(data => {
        membershipId.value = data.id
        name.value = data.name
        createdAt.value = data.createdAt.split('T')[0]

        document.getElementById('edit').addEventListener('click', () => {
            
            fetch(`http://localhost:8080/api/membership/${data.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name.value    
                })
            })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './membership.html'
                        return
                    }
                    alert("Izmena neuspešna!")
                })
        })
    })