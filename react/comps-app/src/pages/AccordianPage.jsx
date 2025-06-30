import React from 'react'
import Accordion from '../components/Accordion'

const AccordianPage = () => {
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
    <Accordion items={items} />
  )
}

export default AccordianPage