import React, { useState } from 'react'
import LandingPage from './components/LandingPage'
import ImageShow from './components/ImageShow';

const App = () => {
  const [firstPage, setFirstPage] = useState(false);

  return (
    <div>
      {firstPage ? <ImageShow /> :

        <LandingPage onContinue={() => setFirstPage(true)} />
      }
    </div>
  )
}

export default App