import "./notes.css";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { FaExpandAlt } from "react-icons/fa";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import CustomEditor from "../../common/CustomEditor";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewNote,
  deleteNote,
  editExistingNote,
  setActiveNote,
  starNote,
} from "../../../redux/actions/noteActions";

const Notes = (props) => {
  const dispatch = useDispatch();

  const allNotes = useSelector((state) => state.note.notes);
  const activeNote = useSelector((state) => state.note.activeNote);

  const [noteTitle, setNoteTitle] = useState("");
  const [noteRichText, setNoteRichText] = useState("");
  const [isTwoWindow, toggleTwoWindow] = useState(true);
  const [fromQuickNoteBtn, setNoteFromQuickNoteBtn] = useState(false);

  let newQuickNote = props?.location?.state?.newNote || false;

  useEffect(() => {
    setNoteFromQuickNoteBtn(newQuickNote);
  }, [newQuickNote]);

  useEffect(() => {
    if (fromQuickNoteBtn) {
      toggleTwoWindow(false);
      openANote({
        id: null,
        isFav: false,
        date: new Date().toLocaleDateString(),
        title: "",
        richText: "",
      });
    } else toggleTwoWindow(true);
    // eslint-disable-next-line
  }, [fromQuickNoteBtn]);

  useEffect(() => {
    setNoteTitle(activeNote?.title || "");
    setNoteRichText(activeNote?.richText || "");
  }, [activeNote]);

  const openANote = (note) => {
    dispatch(setActiveNote(note));
  };

  const handleSubmit = () => {
    activeNote?.id
      ? dispatch(
          editExistingNote({
            id: activeNote?.id,
            isFav: activeNote?.isFav,
            date: activeNote?.date,
            title: noteTitle,
            richText: noteRichText,
          })
        )
      : dispatch(
          addNewNote({
            id: allNotes.length + 1,
            isFav: false,
            date: new Date().toLocaleDateString(),
            title: noteTitle,
            richText: noteRichText,
          })
        );
    props.history.push("/notes");
  };

  const stripHtml = (dirtyString) => {
    const doc = new DOMParser().parseFromString(dirtyString, "text/html");

    return doc.body.textContent || "";
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} className={isTwoWindow ? "col1" : "hideCol"}>
          <h3 className="head1">NOTES</h3>
          {allNotes.map((note) => {
            return (
              <div
                className="noteCard"
                key={note.id}
                onClick={() => openANote(note)}
              >
                <Row>
                  <Col xs={12} lg={6}>
                    <p className="crdTitle">{note.title}</p>
                  </Col>
                  <Col xs={12} lg={6} style={{ textAlign: "right" }}>
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="starNote">
                          {note.isFav
                            ? "Mark as Not Favourite"
                            : "Mark Favourite"}
                        </Tooltip>
                      }
                    >
                      {note.isFav ? (
                        <AiFillStar
                          onClick={() =>
                            dispatch(starNote(note.id, note.isFav))
                          }
                          style={{ color: "#fff", cursor: "pointer" }}
                        />
                      ) : (
                        <AiOutlineStar
                          onClick={() =>
                            dispatch(starNote(note.id, note.isFav))
                          }
                          style={{ color: "#fff", cursor: "pointer" }}
                        />
                      )}
                    </OverlayTrigger>
                    <OverlayTrigger
                      overlay={<Tooltip id="deleteNote">Delete Note</Tooltip>}
                    >
                      <AiOutlineDelete
                        onClick={() => dispatch(deleteNote(note.id))}
                        style={{ color: "#fff", cursor: "pointer" }}
                      />
                    </OverlayTrigger>
                  </Col>
                </Row>
                <p className="date">{note.date}</p>
                <p className="desc">
                  {stripHtml(note?.richText).slice(0, 90)}
                </p>
              </div>
            );
          })}
        </Col>
        <Col xs={12} md={isTwoWindow ? 9 : 12} className="col2">
          <div className="editorHead">
            <div className="rightMenu">
              <FaExpandAlt
                className="expandIcn"
                onClick={() => toggleTwoWindow(!isTwoWindow)}
              />
              <Form.Control
                size="sm"
                value={noteTitle}
                placeholder="Enter Title"
                onChange={(e) => setNoteTitle(e.target.value)}
              />
            </div>
            <div className="leftMenu">
              <p>NoteBook 1 selected</p>
              <DropdownButton title="Select NoteBook" size="sm">
                <Dropdown.Item as="button">NoteBook 1</Dropdown.Item>
                <Dropdown.Item as="button">NoteBook 2</Dropdown.Item>
              </DropdownButton>
              <Button size="sm" variant="success" onClick={handleSubmit}>
                Save
              </Button>
            </div>
          </div>
          <CustomEditor
            value={noteRichText}
            handleEditorChange={(e) => setNoteRichText(e)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Notes;
