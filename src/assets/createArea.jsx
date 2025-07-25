import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';
import Fab from '@mui/material/Fab';

function CreateArea(props) {
     const [isExpanded, setExpanded] = useState(false);
     const [note, setNote] = useState({
        title:"",
        content:"",
     })


     function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
           return {
            ...prevNote,
            [name]: value
            
           }
        })
     }

     function submitNote(event) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
       event.preventDefault()
     }

     function expand() {
        setExpanded(true);
     }

    return (
        <div>
            <form className='create-note'>
                {isExpanded && <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />}
    <textarea
                onClick={expand}
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
                <Zoom in={isExpanded}>
                <Fab onClick={submitNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea