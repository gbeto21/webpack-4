import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader.js'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

console.log(data)

function App() {

    const [loaderList, setLoaderList] = useState([])

    function hadleClick() {
        setLoaderList(data.loaders)
    }

    return (
        <div>
            Que buena aplicación hecha con React.js
            <video 
                src={video} 
                width = {360} 
                controls 
                poster={logo}></video>
            <p>
                <img src={logo} width={40}/>
            </p>
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