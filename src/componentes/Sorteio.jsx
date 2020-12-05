import React from 'react'
import Card from './Card'

export default props => {
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
