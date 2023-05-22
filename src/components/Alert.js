import React from 'react'

export default function Alert(props) {
  return (
    
        props.alert && <div id='alertwidth' className='alert alert-success' role="alert">
            {props.alert.msg}
             
        </div>
  )
}
