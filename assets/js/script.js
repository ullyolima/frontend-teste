//======================= MAP =======================\\
function initMap() {
    let map, marker

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.599225, lng: -46.6366589 },
        zoom: 18
    })

    marker = new google.maps.Marker({ position: { lat: -23.599225, lng: -46.6366589 }, map: map })
}
//====================== VALIDATE ======================\\
const form = document.querySelector('.needs-validation')

form.addEventListener('submit', function (event) {
    if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
    }
    form.classList.add('was-validated')
})
//======================= MASKS =======================\\

const masks = {
    phone (value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    },
}
document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})