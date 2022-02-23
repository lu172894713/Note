import React from 'react';

const List = (props) => {
  return (
    <div className="note-map">
      {props.noteArray.map((note, i) => {
        let noteClass = `note-list ${note.borderColor}`
        return (
          <div key={i}>
            <div className={noteClass}>
              <div className="note-single">
                <h2 className="note-single-title">{note.title}</h2>
                <div className="note-map-btn">
                  <i onClick={() => props.onTrashIconClick(note)} className="note-icon fa fa-trash" aria-hidden="true"></i>
                  <i onClick={() => props.onEdit(note)} className="note-icon fa fa-pencil" aria-hidden="true"></i>
                </div>
              </div>
              <hr />
              <textarea value={note.body} className="note-list-body"></textarea>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default List;
