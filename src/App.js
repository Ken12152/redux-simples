import './App.css';
import Intervalo from './componentes/Intervalo'
import Media from './componentes/Media'
import Soma from './componentes/Soma'
import Sorteio from './componentes/Sorteio'

function App() {
    return (
        <div className="App">
            <h1>React-Redux</h1>

            <div className="linha">
                <Intervalo />
            </div>

            <div className="linha">
                <Media />
                <Soma />
                <Sorteio />
            </div>
        </div>
    )
}

export default App;
