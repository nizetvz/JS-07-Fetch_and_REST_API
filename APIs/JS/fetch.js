/* Fetch
 *
 * Post */

const BASE_URL="https://pokeapi.co/api/v2/";

//Fetch no async
// fetch(BASE_URL+"pokemon/ditto")
// .then((res) => res.json())
// .then(data => console.log(data));

//fetch async

const fetchPokemon= async(pokemon) => {
    try{
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse= await response.json();
        return parsedResponse; 
    } catch (err){ 
        console.error(err);
    }
}

//Obtener pokemon
document.getElementById ('get-btn')
.addEventListener ('click', async() => {
    const text =document.getElementById("poke-name").value.toLowerCase();
    const pokemon=await fetchPokemon(text);
    localStorage.setItem("currentPokeId",pokemon.id);
    console.log(pokemon.name);

})

document.addEventListener("DOMContentLoaded", async() =>{
    const storedId= localStorage.getItem('currentPokeId');
    const initialId= storedId ? parseInt(storedId):1;
    const pokemon= await fetchPokemon(initialId);
    console.log(pokemon.name);
})

//obtener el anterior y el siguiente

document.getElementById("previous-btn")
.addEventListener("click",async()=>{
const currentPokeId=parseInt(localStorage.getItem('currentPokeID'));
const newId=Math.max(1,currentPokeId -1);
const pokemon=await fetchPokemon (newId);
console.log(pokemon.id);
localStorage.setItem("currentPokeId", newId);
})

document.getElementById("next-btn")
.addEventListener("click", async () =>{
    const newId=currentPokeId+1;
    const pokemon= await fetchPokemon (newId);
    console.log(pokemon.name);
    localStorage.setItem("currentPokeId", newId);
})

// POST

/*etch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))*/

/////// EJERCICIOS
// -Arreglar el pokemon en localStorage
// -Manipular DOM y agregar una tarjeta del pokemon
// -El tamaño y la información de la tarjeta es a consideracion personal. Al menos mostrar el nombre,
// id, peso del pokemon. Puntos extra si se muestra una imagen.
// -La tarjeta debe cargarse en pantalla aún si se cierra la ventana del navegador.
// Para obtener la información recuerda localStorage y nuestro método asíncrono de Fetch.





