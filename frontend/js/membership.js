const mTable = document.getElementById('membershipt')
const mUrls = new URLSearchParams(window.location.search)
const mParams = mUrls.get('search')

fetch('http://localhost:8080/api/membership')
    .then(rsp => rsp.json())
    .then(data => {
        let filteredData = data
        if (mParams) {
            const searchAge = parseInt(mParams)
            if (!isNaN(searchAge)) {
                filteredData = data.filter(membership => membership.age === searchAge)
            }
        }

        filteredData.forEach(membership => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <th scope="row">${membership.id}</th>
                <td>${membership.name}</td>
                <td>${new Date(membership.createdAt).toLocaleDateString('sr-RS')}</td>
                <td>
                    <div class="btn-group">
                        <a href="./m-edit.html?id=${membership.id}" class="btn btn-sm btn-primary">
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

                if (confirm(`Želite li da obrišete članarinu ${membership.id}?`)) {
                    fetch(`http://localhost:8080/api/membership/${membership.id}`, {
                        method: 'DELETE',
                    })
                        .then(rsp => {
                            if (rsp.status == 204) {
                                window.location.href = './membership.html'
                                return
                            }
                            alert("Neuspešno brisanje člananarine!")
                        })
                }
            })
            mTable.appendChild(tr)
        })
    })

