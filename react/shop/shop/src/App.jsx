import React, { useState } from 'react'
import CSVUploader from './components/CSVUploader'
import BookList from './components/BookList'

const App = () => {
  const [refresh, setRefersh] = useState(false);
  //when this toggels, 
  // it will trigger a re-fetch of books in the booklist using the useEffect

  const handleUploadSuccess = () => {
    setRefersh((prev)=> !prev);
  }
  //callback passed to CSVUploader, when files uploaded successfully, 
  //it toggles the refresh state, telling booklist to re-fetch data

  return (
    <div style={{fontFamily: "Montserrat"}}>
      <CSVUploader onUploadSuccess={handleUploadSuccess}/>
      <hr />
      <BookList refresh={refresh}/>
    </div>
  )
}

export default App