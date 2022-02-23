import React from 'react';

const Note = (props) => {
  const borderColor = `note-display ${props.borderColor}`;
  let addSave = (
    <button className="note-dummy button">Add</button>
  )
  if ((props.title !== '' || props.body !== '') && !props.isEdit && !props.isEditing) {
    addSave = (
      <button
        onClick={props.onAdd}
        className="note-save button"
        > Add
      </button>
    )
  } else if (props.isEdit && !props.isEditing) {
    addSave = (
      <button className="note-dummy button">Save</button>
    )
  } else if (!props.isEdit && props.isEditing) {
    addSave = (
      <button
        onClick={props.onSaveEdit}
        className="note-save button"
        > Save
      </button>
    )
  }
  return (
    <div className={borderColor}>
      <div className="color-picker-group">
        <button onClick={props.clickPink} className="color-picker pink" />
        <button onClick={props.clickAqua} className="color-picker aqua" />
        <button onClick={props.clickYellow} className="color-picker yellow" />
        <button onClick={props.clickBlue} className="color-picker blue" />
      </div>
      <div>
        <input
          type="text"
          className="note-title"
          placeholder="Untitled"
          value={props.title}
          onChange={(e) => props.onTitleInput(e.target.value)}
        />
        <textarea
          className="note-body"
          placeholder="Just start typing here"
          value={props.body}
          onChange={(e) => props.onBodyInput(e.target.value)}
        />
        <div className="button-group">
          <button
            onClick={props.isOpen}
            className="note-cancel button"
            > Cancel
          </button>
          {addSave}
        </div>
      </div>
    </div>
  );
}


export default Note;
