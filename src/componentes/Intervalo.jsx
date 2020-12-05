import React from 'react'
import Card from './Card'
import './Intervalo.css'

export default props => {
    const {min, max} = props
    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={min}
                        onChange={ e => props.onChangeMin(+e.target.value) } />
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type="number" value={max}
                        onChange={ e => props.onChangeMax(+e.target.value) } />
                </span>
            </div>
        </Card>
    )
}
