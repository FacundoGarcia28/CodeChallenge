fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nombre: 'nombre',
    apellido: 'apellido',
    fechaNacimiento: 'fecha_Nacimiento'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const data = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    fechaNacimiento: form.fechaNacimiento.value
  };

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
});
