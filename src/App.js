import './App.css';
import react, { useState } from 'react'

import Card from './componentes/Card'
import Intervalo from './componentes/Intervalo'
import Media from './componentes/Media'
import Soma from './componentes/Soma'
import Sorteio from './componentes/Sorteio'

function App() {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(100)

    return (
        <div className="App">
            <h1>React-Redux</h1>

            <div className="linha">
              <Intervalo min={min} max={max} 
                  onChangeMin={setMin} onChangeMax={setMax}/>
            </div>
  
            <div className="linha">
                <Media min={min} max={max} />
                <Soma min={min} max={max} />
                <Sorteio min={min} max={max} />
            </div>

        </div>
    )
}

export default App;
