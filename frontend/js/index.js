const table = document.getElementById('table')
const urls = new URLSearchParams(window.location.search)
const searchParams = urls.get('search')

fetch('http://localhost:8080/api/member')
    .then(rsp => rsp.json())
    .then(data => {
        let filteredData = data
        if (searchParams) {
            const searchAge = parseInt(searchParams)
            if (!isNaN(searchAge)) {
                filteredData = data.filter(member => member.age === searchAge)
            }
        }

        filteredData.forEach(member => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <th scope="row">${member.id}</th>
                <td>${member.name}</td>
                <td>${member.surname}</td>
                <td>${member.age}</td>
                <td>${new Date(member.createdAt).toLocaleDateString('sr-RS')}</td>
                <td>
                    <div class="btn-group">
                        <a href="./edit.html?id=${member.id}" class="btn btn-sm btn-primary">
                            <i class="fa-solid fa-pen"></i> Izmeni
                        </a>
                        <button type="button" class="btn btn-sm btn-danger remove">
                            <i class="fa-solid fa-trash-can"></i> Obriši
                        </button>
                    </div>
                </td>
            `

            const removeButton = tr.querySelector('.remove')
            removeButton.addEventListener('click', () => {

                if (confirm(`Želite li da obrišete člana ${member.id}?`)) {
                    fetch(`http://localhost:8080/api/member/${member.id}`, {
                        method: 'DELETE',
                    })
                        .then(rsp => {
                            if (rsp.status == 204) {
                                window.location.href = './index.html'
                                return
                            }
                            alert("Neuspešno brisanje člana!")
                        })
                }
            })
            table.appendChild(tr)
        })
    })

