import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader.js'

console.log(data)

function App() {

    const [loaderList, setLoaderList] = useState([])

    function hadleClick() {
        setLoaderList(data.loaders)
    }

    return (
        <div>
            Que buena aplicación hecha con React.js
            <ul>
                {
                    loaderList.map(item =>
                        <Loader
                            {...item}
                            key={item.id} />
                    )
                }
            </ul>
            <button onClick={hadleClick}>Cargar loaders</button>
        </div>
    )
}

export default App