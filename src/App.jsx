
import Header from './assets/Header'
import Footer from './assets/Footer'
import Notes from './assets/Notes'
import notes from '../notes'

console.log(notes);


function App() {
 

  return (
    <div className="App">
    <Header /> 
    {notes.map( (noteItem) =>
    <Notes
    key={noteItem.key}
    title={noteItem.title}
    content={noteItem.content} />)}

    <Footer />
    </div>
  )
}

export default App
