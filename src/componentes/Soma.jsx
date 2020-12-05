import React from 'react'
import Card from './Card'

export default props => {
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
