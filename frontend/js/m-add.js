const name = document.getElementById('name')



document.getElementById('edit').addEventListener('click', () => {
    if (name.value == '' || name.value == null) {
        alert("Morate popuniti polje!!!")
        return
    }

    fetch('http://localhost:8080/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name.value,
        })
    })
        .then(rsp => {
            if (rsp.ok) {
                window.location.href = './membership.html'
                return
            }
            alert("Dodavanje članarine nije uspelo.")
        })
})