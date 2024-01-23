const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//Se corrigió aumentandole un '.' para que apunte al elemento 'p' del HTML con la clase 'name'.
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //Se agregó la palabra reservada 'async' ya que se trata de una función asíncrona, y funciona en combinación de 'await', para esperar que se cumpla la promesa fetch y mostrarla en pantalla con el 'console.log(data)'
  $n.textContent = 'cargando...';
  const data = await fetch(`${usersEndpoint}/${username}`); //Se modificó el nombre de la variable ya que no coincidía con el código
  console.log(data);

  //El contenido que se actualiza en las variables no se cargaba porque se utilizaban comillas simples. Fue necesario reemplazarlas con 'backticks' para que el contenido sea mostrado
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

//No me agarra:( y en serio que ya no sé qué modificar. Me aparece en el viewport que '$n', '$b' y '$l' están 'undefined' :(