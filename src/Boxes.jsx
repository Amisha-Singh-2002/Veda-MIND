import React from 'react'
import './Boxes.css';
const Boxes = (props) => {




  return (
        <div className='inbox'>
            <h1>
                {props.helu}
            </h1>
            <h2>
                {props.helo}
            </h2>
        </div>
  )
}

export default Boxes