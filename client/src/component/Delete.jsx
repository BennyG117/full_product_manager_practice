import React from 'react'

const Delete = (props) => {

  //pass this into dashboard
const {deleteProduct} = props

  return (
    <div>
      <button onClick={deleteProduct}>Delete</button>


    </div>
  )
}

export default Delete;