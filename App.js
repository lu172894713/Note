import React from "react";
import "./styles.css";

import List from "./List";
import Note from "./Note";
import RemoveModal from "./RemoveModal";

var DS = require("./LinkedList");
var LinkedList = DS.LinkedList;
var Node = DS.Node;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: "note-card border-pink",
      title: "",
      body: "",
      isOpen: false,
      isRemvModal: false,
      isEdit: false,
      isEditing: false,
      onRemvFocus: {},
      onEditFocus: {},
      noteArray: [],
      index: 0
    };
    this.clickPink = this.clickPink.bind(this);
    this.clickAqua = this.clickAqua.bind(this);
    this.clickYellow = this.clickYellow.bind(this);
    this.clickBlue = this.clickBlue.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.isOpen = this.isOpen.bind(this);
    this.addToNoteArray = this.addToNoteArray.bind(this);
    this.onTitleInput = this.onTitleInput.bind(this);
    this.onBodyInput = this.onBodyInput.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onTrashIconClick = this.onTrashIconClick.bind(this);
    this.onTrashIconCancel = this.onTrashIconCancel.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onSaveEdit = this.onSaveEdit.bind(this);
  }

  clickPink() {
    if (this.state.isEdit) {
      this.setState({
        isEditing: true,
        isEdit: false
      });
    }
    this.setState({
      borderColor: "note-card border-pink"
    });
  }

  clickAqua() {
    if (this.state.isEdit) {
      this.setState({
        isEditing: true,
        isEdit: false
      });
    }
    this.setState({
      borderColor: "note-card border-aqua"
    });
  }

  clickYellow() {
    if (this.state.isEdit) {
      this.setState({
        isEditing: true,
        isEdit: false
      });
    }
    this.setState({
      borderColor: "note-card border-yellow"
    });
  }

  clickBlue() {
    if (this.state.isEdit) {
      this.setState({
        isEditing: true,
        isEdit: false
      });
    }
    this.setState({
      borderColor: "note-card border-blue"
    });
  }

  onTitleInput(title) {
    if (this.state.isEdit) {
      this.setState({
        isEditing: true,
        isEdit: false
      });
    }
    this.setState({
      title
    });
  }

  onBodyInput(body) {
    if (this.state.isEdit) {
      this.setState({
        isEditing: true,
        isEdit: false
      });
    }
    this.setState({
      body
    });
  }

  onAdd() {
    this.addToNoteArray();
    this.setState({
      borderColor: "note-card border-pink",
      title: "",
      body: "",
      isOpen: false,
      isRemvModal: false,
      isEditing: false
    });
  }

  isOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
      title: "",
      body: "",
      isEdit: false,
      isEditing: false,
      onEditFocus: {}
    });
  }

  addToNoteArray() {
    const newNote = {
      title: this.state.title,
      body: this.state.body,
      borderColor: this.state.borderColor
    };
    this.setState(
      {
        index: this.state.index + 1
      },
      () => {
        this.setState((prevState) => ({
          noteArray: prevState.noteArray.concat(newNote)
        }));
      }
    );
  }

  onDelete() {
    const indexRemove = this.state.noteArray.indexOf(this.state.onRemvFocus);
    const noteArray = this.state.noteArray;
    noteArray.splice(indexRemove, 1);
    this.setState(
      {
        noteArray
      },
      () => {
        this.setState({
          isRemvModal: false,
          onRemvFocus: {}
        });
      }
    );
  }

  onTrashIconClick(note) {
    this.setState({
      isRemvModal: true,
      onRemvFocus: note
    });
  }

  onTrashIconCancel() {
    this.setState({ isRemvModal: false });
  }

  onEdit(note) {
    this.setState(
      {
        isEdit: true,
        isOpen: true
      },
      () => {
        this.setState(
          {
            title: note.title,
            body: note.body,
            borderColor: note.borderColor
          },
          () => {
            this.setState({ onEditFocus: note });
          }
        );
      }
    );
  }

  onSaveEdit() {
    const indexEdit = this.state.noteArray.indexOf(this.state.onEditFocus);
    const editNote = {
      title: this.state.title,
      body: this.state.body,
      borderColor: this.state.borderColor
    };
    const newNoteArray = this.state.noteArray;
    newNoteArray[indexEdit] = editNote;
    this.setState({
      noteArray: newNoteArray,
      borderColor: "note-card border-pink",
      title: "",
      body: "",
      isOpen: false,
      isRemvModal: false,
      isEdit: false,
      isEditing: false,
      onEditFocus: {}
    });
  }

  render() {
    const isOpen = this.state.isOpen;
    const isRemvModal = this.state.isRemvModal;
    return (
      <div className="app">
        <div className="app-header">
          <button onClick={this.isOpen} className="note-add button">
            {" "}
            <span className="plus">+</span> <span className="A"></span>
            <span className="A">A</span>
            <span className="d">d</span>
            <span className="d2">d</span>
            <span> </span>
            <span className="N">N</span>
            <span className="o">o</span>
            <span className="t">t</span>
            <span className="e">e</span>{" "}
          </button>
        </div>
        <div className="array-list">
          <List
            onEdit={this.onEdit}
            noteArray={this.state.noteArray}
            onTrashIconClick={this.onTrashIconClick}
            onDelete={this.onDelete}
            isRemvModal={this.state.isRemvModal}
          />
        </div>
        {isRemvModal ? (
          <RemoveModal
            onTrashIconCancel={this.onTrashIconCancel}
            onDelete={this.onDelete}
          />
        ) : null}
        {isOpen ? (
          <div className="note-main">
            <Note
              {...this.state}
              onTitleInput={this.onTitleInput}
              onBodyInput={this.onBodyInput}
              clickPink={this.clickPink}
              clickAqua={this.clickAqua}
              clickYellow={this.clickYellow}
              clickBlue={this.clickBlue}
              onAdd={this.onAdd}
              isOpen={this.isOpen}
              onSaveEdit={this.onSaveEdit}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
