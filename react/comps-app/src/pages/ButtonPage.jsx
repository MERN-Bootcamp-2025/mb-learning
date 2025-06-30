import React from 'react'
import Button from '../components/Button'

const ButtonPage = () => {
  return (
    <div className='py-20 px-10 flex flex-col '>
      <Button type="primary" onClick={()=>console.log("clicked!")}>Click</Button>
      <Button type="danger">Logout</Button>
      <Button type='warning' disabled>Warning</Button>
      <Button type='success'success outlined>Done</Button>


    </div>
  )
}

export default ButtonPage