// Variables
  const URL_API = 'https://randomuser.me/api/'
  const form = document.getElementById('generar-nombre')
  const origen = document.getElementById('origen')
  const genero = document.getElementById('genero')
  const resultado = document.getElementById('resultado')

// Listeners
form.addEventListener('submit', cargarNombres)

// Functions
function cargarNombres(e) {
  e.preventDefault()
  const origenSeleccionado = origen.options[origen.selectedIndex].value.toLowerCase();
  const generoSeleccionado = genero.options[genero.selectedIndex].value;
  const cantidad = document.getElementById('numero').value
  let url = `${URL_API}?`

  // Si hay origen agregar a url
  if (origenSeleccionado !== '') {
    url += `nat=${origenSeleccionado}&`
  }
  // Si hay Genero agregar a url
  if (generoSeleccionado !== '') {
    url += `gender=${generoSeleccionado}&`
  }
  // Si hay cantidad agregar a url
  if (cantidad !== '') {
    url += `results=${cantidad}`
  }

  // Llamado Ajax
  const xhr = new XMLHttpRequest()

  xhr.open('GET', url, true)

  xhr.onload = function () {
    const results = JSON.parse(this.responseText).results
    let htmlNames = '<ul class="lista">'

    results.forEach(result => {
      console.log(result);
      htmlNames += `
        <li>${result.name.first}</li>
      `;
    })
    htmlNames += '</ul>'

    resultado.innerHTML = htmlNames;
  }

  xhr.send()

}