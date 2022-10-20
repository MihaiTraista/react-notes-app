import './App.css';
import React, {useState} from 'react';
import NotesList from './components/NotesList'
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 0,
      date: '01/01/2020',
      content: 'This is note one.'
    },
  ]);

  const [searchText, setSearchText] = useState('');

  function handleAddNote(noteText){
    console.log(`should add ${noteText}, id ${notes.length || 0}, date ${(new Date()).toDateString()}`);
    setNotes((prev) => ([...prev, {id: notes.length || 0, date: (new Date()).toDateString(), content: noteText}]));
  }

  function handleDelete(id){
    setNotes((prev) => ([...prev.slice(0, id), ...prev.slice(id+1)]));
  }

  function filteredNotes(){
    return notes.filter(note => note.content.toLowerCase().includes(searchText));
  }

  return (
    <div className="container">
      <Search handleSearch={setSearchText}/>
      <h1>Most Trees Are Blue (aka. Notes App)</h1>
      <NotesList notes={filteredNotes()} handleAddNote={handleAddNote} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
