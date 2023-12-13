import { Routes, Route, Link, useMatch, useParams } from 'react-router-dom'

const Proyecto = () => {
    const match = useMatch('/portafolio/:proyecto_id')
    console.log(match)
    return (
        <h1>Proyecto ...</h1>
    )
}

const Portafolio = () => {
    // const match = useMatch('/inicio/')
    // const params = useParams()
    // console.log(match, params)
    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li>
                    <Link to="proyecto-1">Proyecto 1</Link>
                </li>
                <li>
                    <Link to="proyecto-2">Proyecto 2</Link>
                </li>
            </ul>
            <div>
                <Routes>
                    <Route path="/portafolio/:proyecto_id" element={<Proyecto />} />
                </Routes>
            </div>
        </div>

    )
}

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/portafolio'>Portafolio</Link>
                    </li>
                </ul>
            </nav>
            <section>
                <Routes>
                    <Route path="/" element={<h1>Inicio</h1>} />
                    <Route path="/portafolio" element={<h1>Portafolio</h1>} />
                    <Route path="/portafolio/*" element={<Portafolio />} />
                </Routes>
            </section>
        </div>
    );
}

export default App;