import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Soma(props) {
    const {min, max} = props
    const soma = min + max
    return (
        <Card title="Soma" green>
            <span>
                <span>Soma: </span>
                <strong>{soma}</strong>
            </span>
        </Card>
    )
}

function mapStateToProps(state) {
    return { ...state.numeros }
}

export default connect(mapStateToProps)(Soma)