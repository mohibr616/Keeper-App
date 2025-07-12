import { useState } from 'react'
import Header from './assets/Header'
import Footer from './assets/Footer'
import Notes from './assets/Notes'
import CreateArea from './assets/createArea'



function App() {

  const [notes, setNotes] = useState([])
 
  function addNote(newNote) {
   setNotes(prevNotes => {
   return [...prevNotes, newNote]

   })
   
  }

  function deleteNote(id) {
   setNotes(prevNotes => {
   return prevNotes.filter((noteItem, index) => {
      return index !== id
     })
   })
   
  }

  return (
    <div className="App">
    <Header /> 

    <CreateArea
    onAdd={addNote}
    />
    {notes.map((noteItem, index) => {
      return (
        <Notes
          key={index}
          id={index}
         title={noteItem.title}
         content={noteItem.content}
         onDelete={deleteNote}
        />
      )
    })}

  
    

    <Footer />
    </div>
  )
}

export default App
