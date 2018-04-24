import React from 'react'
import './Saved.css'

const Saved = props => {
    return (
        <div className='saved'>
            {props.saved}
        </div>
    )
}

export default Saved