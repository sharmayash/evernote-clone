import "./notebook.css";
import React, { Fragment, useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addNotpad, delNotpad } from "../../../redux/actions/notepadActions";

const Notebooks = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const notepads = useSelector((state) => state.notepad.notepads);

  const stripHtml = (dirtyString) => {
    const doc = new DOMParser().parseFromString(dirtyString, "text/html");

    return doc.body.textContent || "";
  };

  const handleAdd = () => {
    name.length > 0 &&
      dispatch(
        addNotpad({
          id: notepads.length + 1,
          title: name,
          notes: [],
        })
      );
    setName("");
  };

  return (
    <Container fluid>
      <Row className="row1">
        <Col xs={12} md={6}>
          <h1>Notebooks</h1>
        </Col>
        <Col xs={12} md={6}>
          <Row className="row2">
            <Col xs={8}>
              <Form.Control
                size="sm"
                value={name}
                placeholder="Add New Notebook"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col xs={4}>
              <Button size="sm" variant="success" onClick={handleAdd}>
                Add
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Accordion>
        <Card>
          {notepads.map((notepad) => (
            <Fragment key={notepad.id}>
              <Accordion.Toggle as={Card.Header} eventKey={`${notepad.id}`}>
                <div className="crdheader">
                  {notepad.title}
                  <AiOutlineDelete
                    onClick={() => dispatch(delNotpad(notepad.id))}
                    style={{ color: "red", cursor: "pointer" }}
                  />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`${notepad.id}`}>
                <Card.Body>
                  {notepad.notes.map((note) => (
                    <Row key={note.id}>
                      <Col xs={1}>{note.id}</Col>
                      <Col xs={5}>{note.title}</Col>
                      <Col xs={6}>{stripHtml(note?.richText).slice(0, 90)}</Col>
                    </Row>
                  ))}
                </Card.Body>
              </Accordion.Collapse>
            </Fragment>
          ))}
        </Card>
      </Accordion>
    </Container>
  );
};

export default Notebooks;
