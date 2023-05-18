import React, { useContext } from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
import { Container, Row, Col, Button, Modal, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../HomePage/Home.css";
import "../HomePage/Calendar2.css";
import Calendar from "react-calendar";
import DataContext from "../../Context/DataContext";
import useHooks from "../../Hooks/UseHooks";
import { GetFeelingDate } from "../../Service/DataService";
import JournalPageComponent from "./JournalPageComponent";

type Props = {};

interface CustomTileContentProps {
  date: Date;
  view: string; // Updated type for view property
}

export default function HomeComponent({}: Props) {
  const { updatedUserId } = useContext(DataContext);
  console.log(updatedUserId);

  const [show, setShow] = useState(false);
  const [date, setDate] = useState<Date>(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetFeelingDate(1);
        sessionStorage.setItem("FeelingData", JSON.stringify(data));
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  function getTileClassName(date: Date): string {
    const feelings = ["Amazing", "Okay", "Bad", "Help", "Lack"];

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${month}/${day}/${date.getFullYear()}`;

    let tileClassName = "hi";

    const FeelingStorage = sessionStorage.getItem("FeelingData");
    if (FeelingStorage !== null) {
      const FeelingVariable = JSON.parse(FeelingStorage);

       FeelingVariable.forEach((checkingDate: any) => {

        if (checkingDate.dateChecked === formattedDate) {
          const feelingChecked = checkingDate.feelingChecked as string;

          tileClassName = feelingChecked;
          console.log(tileClassName);
        }
      });
     }
  
  
    console.log(tileClassName);
    return tileClassName;
  }

  const tileContent = ({ date, view }: CustomTileContentProps) => {
    if (view === 'month') {
      const className = getTileClassName(date);
      let tooltipText;
  
      if(className !== "Lack")
      {
        tooltipText = className; // Use className as tooltip text
      }
      else if(className === "Lack")
      {
        tooltipText = "Lack of Motivation";
      }
  
      const tooltip = (
        <Tooltip id="button-tooltip">
          {tooltipText}
        </Tooltip>
      );
  
      return (
        <div className="circle-container">
          <OverlayTrigger placement="top" overlay={tooltip}>
            <div className={className}></div>
          </OverlayTrigger>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <NavbarComponent />
      <Container className="homeContainer">
        <Row className="quotesBx">
          <div className="quotePlaceHolder">
            <p>
              "The past can hurt. But the way I see it, you can either run from
              it, or learn from it." -Walt Disney
            </p>
          </div>
          <div className="quotePlaceHolder">
            <p>
            "If people are doubting how far you can go, go so far that you can't hear them anymore." —Michele Ruiz
            </p>
          </div>
          <div className="quotePlaceHolder">
            <p>
            "You’ve gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth." —William W. Purkey
            </p>
          </div>
        </Row>
        <Row>
          <Col className="calendar">
            <Calendar
              onChange={(value, event) => {
                setDate(value as Date);
                console.log(value);
              }}
              tileContent={tileContent}
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
                <JournalPageComponent />
              </h2>
              <div className="journalEntryDiv">
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
                          journal entry's aren't read by anyone and you are safe
                          here. Just write what ever is on your mind, or write
                          based off of your mood today. Why are you feeling this
                          way today?
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          className="modalInput"
                          rows={3}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer className="modalFooter">
                    <Button onClick={handleClose} className="modalBtn">
                      Submit
                    </Button>
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
