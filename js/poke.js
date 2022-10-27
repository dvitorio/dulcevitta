
  const poke = fetch('https://pokeapi.co/api/v2/pokemon/25')
  .then((response) => response.json())
  .then((data) => {
   document.getElementById('nome').innerHTML = data.name;
   let img = data['sprites']['front_default'];
   document.getElementById('image').setAttribute('src', img);
   document.getElementById('numero').innerHTML = data.id;

   console.log(data);
  });





   

    


  
