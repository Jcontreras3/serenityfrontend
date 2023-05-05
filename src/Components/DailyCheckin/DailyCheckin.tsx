import { Container, Row } from "react-bootstrap";
import "./dailyCheckinStyle.css";
import EmojiFive from "../../Assets/EmojiFive.png"
import EmojiFour from "../../Assets/EmojiFour.png"
import EmojiThree from "../../Assets/EmojiThree.png"
import EmojiTwo from "../../Assets/EmojiTwo.png"
import EmojiOne from "../../Assets/EmojiOne.png"
import { useNavigate } from "react-router-dom";
export default function DailyCheckin() {
  const navigate = useNavigate();
  return (
    <Container fluid className="dailyCont">
      <Row className="dailyRow">
        <div className="dailyBx">
          <div>
            <h1 className="dailyTitle">Daily Check In</h1>
          </div>
          <div className="emotionBtnGroup">
            <h2 className="howRTxt">How are you feeling today?</h2>
            <div className="amazingGroup">
              <img className="heartEyes" src={EmojiFive}/>
              <button className="emotionBtn1">Amazing</button>
            </div>
            <div className="amazingGroup">
              <img className="heartEyes" src={EmojiFour}/>
              <button className="emotionBtn1">Okay</button>
            </div>
            <div className="amazingGroup">
              <img className="heartEyes" src={EmojiThree}/>
              <button className="emotionBtn1">Bad</button>
            </div>
            <div className="amazingGroup">
              <img className="heartEyes" src={EmojiTwo}/>
              <button onClick={() => navigate("/Resources")} className="emotionBtn1">I need help</button>
            </div>
            <div className="amazingGroup">
              <img className="heartEyes" src={EmojiOne}/>
              <button className="emotionBtn1">Lack of motivation</button>
            </div>
            
          </div>
        </div>
      </Row>
    </Container>
  );
}
