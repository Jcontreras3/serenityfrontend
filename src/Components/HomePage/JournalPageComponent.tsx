import React, { useState } from "react";
import { Container, Row, Form, Col, Modal } from "react-bootstrap";
import "./journalStyles.css";

export default function JournalPageComponent() {
  const [journalEntry, setJournalEntry] = useState("");
  const [show, setShow] = useState(false);
  const [journalDisplay, setJournalDisplay] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addEntry = async (e:any) => {
    setJournalEntry(e.target.value);
  };

  const handleSubmit = () => {
    setJournalDisplay(journalEntry);
    setShow(false); // Close the modal
    setJournalEntry(""); // Clear the input field
  };

  return (
    <>
      <div className="paperBox">
        <div className="journalTitleGroup">
          <div className="redLine"></div>
          <p className="titleTxt">Today's Journal Entry</p>
        </div>

        <div className="JournalGroup">
          <div className="journalTxtGroup">
            <p className="journalTxt">{journalDisplay}</p>
          </div>
        </div>
      </div>{" "}
      <Col className="calendar">
        <div className="quoteDiv">
          <br />
          <div className="journalEntryDiv">
            <button className="journalEntryBtn" onClick={handleShow}>
              Journal Entry
            </button>

            <Modal className="t" show={show} onHide={handleClose}>
              <Modal.Body className="modalColor">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="modalTxt">
                      Write however you are feeling right now. These journal
                      entries aren't read by anyone and you are safe here. Just
                      write whatever is on your mind or write based on your mood
                      today. Why are you feeling this way today?
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      className="modalInput"
                      onChange={addEntry}
                      value={journalEntry}
                      rows={3}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="modalFooter">
                <button onClick={handleSubmit} className="modalBtn">
                  Submit
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </Col>
    </>
  );
}
