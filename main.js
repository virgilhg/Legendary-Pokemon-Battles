//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon-form/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon-form/'+poke2
  let pokeStore = []
  let pokeImg = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          pokeStore.push(data.types[0].type.name)
          pokeImg.push(data.sprites.front_shiny)
      
            document.querySelector('#pokeImg1').src = pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            document.querySelector('h2').innerText = " VS "

        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}