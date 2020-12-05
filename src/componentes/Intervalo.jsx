import React from 'react'
import Card from './Card'
import './Intervalo.css'

export default props => (
    <Card title="Intervalo de Numeros" red>
        <div className="Intervalo">
            <span>
                <strong>Minimo:</strong>
                <input type="number" value={0} reddOnly />
            </span>
            <span>
                <strong>Maximo:</strong>
                <input type="number" value={10} reddOnly />
            </span>
        </div>
    </Card>
)
