import React, { useContext } from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import "../HomePage/Home.css";
import "../HomePage/Calendar2.css";
import Calendar from "react-calendar";
import DataContext from "../../Context/DataContext";
import useHooks from "../../Hooks/UseHooks";

type Props = {};

export default function HomeComponent({}: Props) {
  
  const { updatedUserId } = useContext(DataContext);
  console.log(updatedUserId);

  const [show, setShow] = useState(false);
  const [date, setDate] = useState<Date>(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleDateChange = (value: Date | Date[] | null) => {
  //   if (value instanceof Date) {
  //     setDate(value);
  //   }
  // };

  return (
    <div>
      <NavbarComponent />
      <Container className="homeContainer">
        <Row>
          <Col className="calendar">
            <Calendar onChange={(value, event) => 
            {
              setDate(value as Date)
              console.log(value);
            }}
            value={date} 
            />
          </Col>
        </Row>
        <Row>
          <Col className="calendar">
            <div className="quoteDiv">
              <h2>Quote of the day</h2>
              <br />
              <h2 className="quote">
                odio eu feugiat pretium nibh ipsum consequat nisl vel pretium
                lectus quam id leo in vitae turpis massa sed elementum
              </h2>
              <div className="journalEntryDiv">
                {/* <Button className="journalEntryBtn">Journal Entry</Button> */}
                <Button className="journalEntryBtn" onClick={handleShow}>
                  Journal Entry
                </Button>

                <Modal className="t" show={show} onHide={handleClose}>
                  <Modal.Body className="modalColor">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="modalTxt">
                          Write how ever you are feeling right now. These
                          journal entry's aren’t read by anyone and you are safe
                          here. Just write what ever is on your mind, or write
                          based off of your mood today. Why are you feeling this
                          way today?
                        </Form.Label>
                        <Form.Control as="textarea" className="modalInput" rows={3} />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer className="modalFooter">
                    <Button onClick={handleClose} className="modalBtn">Submit</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
