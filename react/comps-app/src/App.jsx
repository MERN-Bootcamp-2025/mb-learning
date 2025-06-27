import React from 'react'
import Button from './components/Button'
import Accordion from './components/Accordion'

const App = () => {
  const items = [
    {
      id: 'vieuhrvui',
      label: 'why are you living?',
      content: 'idk for adventure.idk for adventure.idk for adventure.idk for adventure.idk for adventure.'
    },
    {
      id: 'nhegiwgvf',
      label: 'why are you eating?',
      content: 'Coz i love eating.Coz i love eating.Coz i love eating.Coz i love eating.Coz i love eating.'
    },
    {
      id: 'nehfvyeivf',
      label: 'why are you painting?',
      content: 'to keep me sane.to keep me sane.to keep me sane.to keep me sane.to keep me sane.to keep me sane.'
    }
  ]
  return (
    // <div className='py-20 px-10 flex flex-col '>
    //   <Button type="primary" onClick={()=>console.log("clicked!")}>Click</Button>
    //   <Button type="danger">Logout</Button>
    //   <Button type='warning' disabled>Warning</Button>
    //   <Button type='success'success outlined>Done</Button>


    // </div>
    <Accordion items={items} />
  )
}

export default App