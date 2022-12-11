'use strict';
/*
const apilink = 'https://api.tvmaze.com/search/shows?q=home';
fetch(apilink)
.then(serie => serie.json())
.then(serie => console.log(serie))
.catch(error => console.log(error))

async function tvshows(){
  const apilink = 'https://api.tvmaze.com/search/shows?q=home';
  const request = new Request(apilink);

  const response = await fetch(request);
  const series = await response.json();
  console.log(series);                                    // Step 1 ?
}
//tvshows()

function ShowFirstShow(serie){
  const name = serie[1].show.name
  const link = serie[1].show.url
  const image = serie[1].show.image.medium
  const summary = serie[1].show.summary

  let nombre = document.createElement('div');
  nombre.innerText= name;
  let foto = document.createElement('img');
  foto.src=image;
  let desc = document.createElement('div');
  desc.innerText = summary;
  let url = document.createElement('a');
  url.setAttribute('target', "_blank");
  url.setAttribute('href', link);
  url.innerText = link;
  const container = document.querySelector('#shows');
  container.appendChild(nombre);
  container.appendChild(foto);
  container.appendChild(desc);
  container.appendChild(url);

}
fetch(apilink)
.then(serie => serie.json())
.then(serie =>ShowFirstShow(serie))
.catch(error => console.log(error))                     // Step 2

 */


/*let query = document.getElementById('query').nodeValue
console.log(query)


const apilink = `https://api.tvmaze.com/search/shows?q=${nameSerie}`;
fetch(apilink)
.then(serie => serie.json())
.then(serie => console.log(serie))
.catch(error => console.log(error))
 */

const form = document.querySelector('form');
const nameSerie = document.querySelector('input[name=q]');
const container = document.querySelector('#shows');

form.addEventListener('submit', function(evt) {
    // ... prevent the default action.
    evt.preventDefault();
    console.log(nameSerie.value);
});

async function ShowFirstShow(serie){

  if (serie.length > 0) {
    for (let i = 0; i < serie.length; i++) {
     // const container = document.querySelector('#shows');

      const name = serie[i].show.name
      let nombre = document.createElement('h1');
      nombre.innerHTML = name;
      container.appendChild(nombre);

      const image = serie[i].show.image
      let foto = document.createElement('img');
      if (image == null || image === '') {
        foto.src = "https://via.placeholder.com/210x300?text=text+here";
      } else if (image !== null) {
        foto.src = image.medium
      }
      container.appendChild(foto);

      const summary = serie[i].show.summary
      let desc = document.createElement('article');
      desc.innerHTML = summary;
      container.appendChild(desc);

      const link = serie[i].show.url
      let url = document.createElement('a');
      url.setAttribute('target', "_blank");
      url.setAttribute('href', link);
      url.innerText = link
      container.appendChild(url);

      const genres = serie[i].show.genres
      if (genres.length > 0) {
        for (let i = 0; i < genres.length; i++) {
          let Ordengender = document.createElement('li')
          Ordengender.innerHTML = genres[i];
          container.appendChild(Ordengender);
        }
      }
    }
  }
}

fetch(apilink)
.then(serie => serie.json())
.then(serie =>ShowFirstShow(serie))
.catch(error => console.log(error))

