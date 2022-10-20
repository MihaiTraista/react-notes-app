import React, {useState} from 'react';

export default function AddNote({handleAddNote}){
  const [noteText, setNoteText] = useState('');

  function handleChange(event){
    
    if(noteText.length < 200){
      setNoteText(event.target.value);
    } else {
      setNoteText(event.target.value.slice(0, event.target.value.length-1));
    }
  }

  function handleSaveClick(){
    if (noteText.trim().length > 0){
      handleAddNote(noteText);
      setNoteText('');
    }
  }

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        placeholder="enter a new note"
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{200-noteText.length} Remaining</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}