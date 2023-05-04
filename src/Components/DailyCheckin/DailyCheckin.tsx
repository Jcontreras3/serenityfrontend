import { Container, Row } from "react-bootstrap";
import "./dailyCheckinStyle.css"

export default function DailyCheckin() {
  return (
    <Container fluid className="dailyCont">
        <Row className="dailyRow">
            <div className="dailyBx">
                <div>
                    <h1 className="dailyTitle">Daily Check In</h1>
                    <h2 className="howRTxt">How are you feeling today?</h2>
                </div>
                <div className="emotionBtnGroup">
                 <button className="emotionBtn1">Amazing</button>
                </div>
                
            </div>
        </Row>
    </Container>
  )
}