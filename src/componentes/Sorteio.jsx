import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Sorteio = props => {
    const {min, max} = props
    const random = parseInt(Math.random() * (max - min) + min)
    return (
        <Card title="Sorteio" purple>
            <span>
                <span>Sorteio: </span>
                <strong>{random}</strong>
            </span>
        </Card>
    )
}

function mapStateToProps(state) {
    return { ...state.numeros }
}

export default connect(mapStateToProps)(Sorteio)