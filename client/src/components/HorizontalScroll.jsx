import React from 'react'

const HorizontalScroll = ({ bodyPart }) => {
    return (
        <div>
            {bodyPart.map((part) => (
                <div key={part}>{part}</div>
            ))}
        </div>
    )
}

export default HorizontalScroll
