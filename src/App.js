import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () =>{  

  const [allNotes, setAllNotes] = useState([]);
  const addNote = (note) => {
    console.log(note.title);
    setAllNotes((oldVal)=>{
      return[...oldVal,note];
    });
  }

  const delEvent = (id)=>{    
    setAllNotes((oldVal)=>{
      return oldVal.filter((arrElem,index)=>{
        return index != id;
      })
    })
  }

  return(
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {allNotes.map((noteVal,index)=>{
        return <Note title={noteVal.title} desc={noteVal.desc} event={delEvent} id={index} key={index} />
      })}      
      <Footer />
    </>
  )
}

export default App;