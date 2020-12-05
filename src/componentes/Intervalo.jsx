import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterarNumeroMin, alterarNumeroMax } from '../store/actions/numerosAction'

function Intervalo(props) {
    const {min, max} = props
    return (
        <Card title="Intervalo de Numeros" red>
            <div className="Intervalo">
                <span>
                    <strong>Minimo:</strong>
                    <input type="number" value={min} readonly 
                        onChange={ e => props.alterarMinimo(+e.target.value) } />
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type="number" value={max} readonly
                        onChange={ e => props.alterarMaximo(+e.target.value) } />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return { ...state.numeros }
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMin(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMax(novoNumero)
            dispatch(action)
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo)