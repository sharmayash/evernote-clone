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
import { AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import CustomEditor from "../../common/CustomEditor";

const Notes = (props) => {
  let newQuickNote = props?.location?.state?.newNote || false;
  let [fromQuickNoteBtn, setNoteFromQuickNoteBtn] = useState(false);
  let [isTwoWindow, toggleTwoWindow] = useState(true);

  useEffect(() => {
    setNoteFromQuickNoteBtn(newQuickNote);
  }, [newQuickNote]);

  useEffect(() => {
    if (fromQuickNoteBtn) toggleTwoWindow(false);
    else toggleTwoWindow(true);
  }, [fromQuickNoteBtn]);

  const handleEditorChange = (e) => {
    console.log(e.target.getContent());
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3} className={isTwoWindow ? "col1" : "hideCol"}>
          <h3 className="head1">NOTES</h3>
          <div className="noteCard">
            <Row>
              <Col xs={12} lg={6}>
                <p className="crdTitle">Get Started</p>
              </Col>
              <Col xs={12} lg={6} style={{ textAlign: "right" }}>
                <OverlayTrigger
                  overlay={<Tooltip id="starNote">Mark Favourite</Tooltip>}
                >
                  <AiOutlineStar style={{ color: "#fff", cursor: "pointer" }} />
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id="deleteNote">Delete Note</Tooltip>}
                >
                  <AiOutlineDelete
                    style={{ color: "#fff", cursor: "pointer" }}
                  />
                </OverlayTrigger>
              </Col>
            </Row>
            <p className="date">22/22/2222</p>
            <p className="desc">
              lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
              lorem ipsum dolor sit lorem ipsum dolor sit
            </p>
          </div>
        </Col>
        <Col xs={12} md={isTwoWindow ? 9 : 12} className="col2">
          <div className="editorHead">
            <div>
              <FaExpandAlt
                className="expandIcn"
                onClick={() => toggleTwoWindow(!isTwoWindow)}
              />
              <Form.Control size="sm" placeholder="Enter Title" />
            </div>
            <div>
              <p>NoteBook 1 selected</p>
              <DropdownButton title="Select NoteBook" size="sm">
                <Dropdown.Item as="button">NoteBook 1</Dropdown.Item>
                <Dropdown.Item as="button">NoteBook 2</Dropdown.Item>
              </DropdownButton>
              <Button size="sm" variant="success">
                Save
              </Button>
            </div>
          </div>
          <CustomEditor handleEditorChange={handleEditorChange} />
        </Col>
      </Row>
    </Container>
  );
};

export default Notes;
