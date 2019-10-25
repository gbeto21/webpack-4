function render(data){
    const pockemon = document.createElement('img')
    pockemon.setAttribute('src', pockemon.data.sprites.front_default)
    document.body.append(pockemon)
}

export default render