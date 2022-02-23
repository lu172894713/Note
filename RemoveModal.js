import React from 'react';

const RemoveModal = (props) => (
  <div className="remove-modal">
    <div className="remove-top">
      <h2>Delete Note</h2>
      <br />
      Are you sure you want to delete this note?
    </div>
    <div className="button-group remove">
      <button onClick={props.onDelete} className="note-save button delete-btn">Delete</button>
      <button onClick={props.onTrashIconCancel} className="note-cancel button cancel-btn">Cancel</button>
    </div>
  </div>
);

export default RemoveModal;
