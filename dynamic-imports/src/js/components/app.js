import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader.js'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

console.log(data)

function App() {

    const [loaderList, setLoaderList] = useState([])

    async function hadleClick() {
        setLoaderList(data.loaders)
        const { alerta } = await import('./alert.js')
        alerta('omg, éste módulo ha cargado dinámicamente.')
    }

    return (
        <div>
            <p className="sass">
                Esto es sass
            </p>
            <p className="less">
                Esto es less
            </p>
            <p className="stylus">
                Esto es stylus
            </p>
            <p className="post-css">
                Esto es post-css
            </p>
            Que buena aplicación hecha con React.js
            <video
                src={video}
                width={360}
                controls
                poster={logo}></video>
            <p>
                <img src={logo} width={40} />
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