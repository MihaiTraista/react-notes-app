import React, {useState} from 'react';
import Note from './Note'
import AddNote from './AddNote'

export default function NotesList({ notes, handleAddNote, handleDelete}){
  return(
    <div className="notes-list">
      {notes.map((note) => <Note 
        key={note.id}
        id={note.id}
        content={note.content}
        date={note.date}
        handleDelete={handleDelete}
      />)}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}