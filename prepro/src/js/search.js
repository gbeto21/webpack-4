async function search(id){
    const response = await fetch(`htts://pokeapi.co/api/v2/pockemon/${id}`)
    const pokemon = await response.json()
    return pokemon
}

export default search