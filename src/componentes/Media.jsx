import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Media(props) {
    const {min, max} = props
    const media = (min + max) /2

    return (
        <Card title="Media" blue>
            <span>
                <span>Media: </span>
                <strong>{media}</strong>
            </span>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Media)