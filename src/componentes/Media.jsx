import React from 'react'
import Card from './Card'

export default props => {
    const {min, max} = props
    const media = parseInt((min + max) / 2)
    return (
        <Card title="Media" blue>
            <span>
                <span>Media: </span>
                <strong>{media}</strong>
            </span>
        </Card>
    )
}
