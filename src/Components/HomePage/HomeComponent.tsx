import { useContext } from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import "../HomePage/Home.css";
import "../HomePage/Calendar2.css";
import Calendar from "react-calendar";
import DataContext from "../../Context/DataContext";
import { GetFeelingDate, JournalEntryFetch } from "../../Service/DataService";
import JournalPageComponent from "./JournalPageComponent";
import { ThreeCardDisplay } from "./ThreeQuoteComponent";
type Props = {};

interface CustomTileContentProps {
  date: Date;
  view: string; // Updated type for view property
}


export default function HomeComponent({ }: Props) {
  const { updatedUserId } = useContext(DataContext);

  const [show, setShow] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [journalInput, setJournalInput] = useState("");
  const [journalDisplay, setJournalDisplay] = useState("");

  const AddJournal = async () => {

    let sessionStorageVar;
    if (sessionStorage.getItem("UserId") !== null) {
      sessionStorageVar = parseInt(sessionStorage.getItem("UserId")!)
    }

    let Id = 0;
    let UserIdPulled = sessionStorageVar;
    let JournalChecked = journalInput;
    let DateChecked = "Hello";


    let userJournalentry = {
      Id,
      UserIdPulled,
      JournalChecked,
      DateChecked
    }

  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const myId = parseInt(sessionStorage.getItem('UserId')!);
        const data = await GetFeelingDate(myId);
        sessionStorage.setItem("FeelingData", JSON.stringify(data));
        setIsLoading(false); // Set isLoading to false after data is fetched
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
        }
      });
    }

    return tileClassName;
  }

  const tileContent = ({ date, view }: CustomTileContentProps) => {
    if (view === "month" && !isLoading) {
      const className = getTileClassName(date);
      let tooltipText;

      if (className !== "Lack") {
        tooltipText = className; // Use className as tooltip text
      } else if (className === "Lack") {
        tooltipText = "Lack of Motivation";
      }

      const tooltip = <Tooltip id="button-tooltip">{tooltipText}</Tooltip>;

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
          <div>
            <p className="quotesTitle">Quotes of the day</p>
            <ThreeCardDisplay />
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

              <br />
              <h2 className="quote">

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
                          onChange={(e) => setJournalInput(e.target.value)}
                          rows={3}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer className="modalFooter">
                    <Button onClick={AddJournal} className="modalBtn">
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
