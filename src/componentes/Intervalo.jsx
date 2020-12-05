import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Intervalo(props) {
    const {min, max} = props
    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={min} />
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type="number" value={max} />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return { ...state.numeros }
}

export default connect(mapStateToProps)(Intervalo)