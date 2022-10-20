import React, {useState} from 'react';
import {MdDeleteForever} from 'react-icons/md';

export default function Note({id, date, content, handleDelete}){

  return(
    <div className="note">
      <span>{content}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever className="delet-icon" size="1.3em" onClick={() => handleDelete(id)}/>
      </div>
    </div>
  );
}