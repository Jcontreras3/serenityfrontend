import { Container, Row } from "react-bootstrap";
import "./dailyCheckinStyle.css";
import EmojiFive from "../../Assets/EmojiFive.png"
import EmojiFour from "../../Assets/EmojiFour.png"
import EmojiThree from "../../Assets/EmojiThree.png"
import EmojiTwo from "../../Assets/EmojiTwo.png"
import EmojiOne from "../../Assets/EmojiOne.png"
import { useNavigate } from "react-router-dom";
import { CheckInUser } from "../../Service/DataService";
export default function DailyCheckin() {
  const navigate = useNavigate();

  const handleAmazing = async () => {
    let id = 0;
    let userIdPulled = parseInt(sessionStorage.getItem('UserId')!);
    let feelingChecked = "Amazing";
    let dateChecked = "blank";


    let checkInData = {
      id,
      userIdPulled,
      feelingChecked,
      dateChecked
    }; 

    CheckInUser(checkInData);
    navigate("/Home");
  }; 

  const handleOkay = async () => {
    let id = 0;
    let userIdPulled = parseInt(sessionStorage.getItem('UserId')!);
    let feelingChecked = "Okay";
    let dateChecked = "blank";


    let checkInData = {
      id,
      userIdPulled,
      feelingChecked,
      dateChecked
    }; 

    CheckInUser(checkInData);
    navigate("/Home");
  }; 

  const handleBad = async () => {
    let id = 0;
    let userIdPulled = parseInt(sessionStorage.getItem('UserId')!);
    let feelingChecked = "Bad";
    let dateChecked = "blank";


    let checkInData = {
      id,
      userIdPulled,
      feelingChecked,
      dateChecked
    }; 

    CheckInUser(checkInData);
    navigate("/Home");
  }; 

  const handleHelp = async () => {
    let id = 0;
    let userIdPulled = parseInt(sessionStorage.getItem('UserId')!);
    let feelingChecked = "Help";
    let dateChecked = "blank";


    let checkInData = {
      id,
      userIdPulled,
      feelingChecked,
      dateChecked
    }; 

    CheckInUser(checkInData);
    navigate("/Resources");
  }; 

  const handleLack = async () => {
    let id = 0;
    let userIdPulled = parseInt(sessionStorage.getItem('UserId')!);
    let feelingChecked = "Lack";
    let dateChecked = "blank";


    let checkInData = {
      id,
      userIdPulled,
      feelingChecked,
      dateChecked
    }; 

    CheckInUser(checkInData);
    navigate("/Home")
  }; 

  return (
    <Container fluid className="dailyCont">
      <Row className="dailyRow">
        <div className="dailyBx">
          <div>
            <h1 className="dailyTitle">Daily Check In</h1>
          </div>
          <div className="emotionBtnGroup">
            <p className="howRTxt">How are you feeling today?</p>
            <div className="amazingGroup">
              <img className="heartEyes" src={EmojiFive}/>
              <button onClick={handleAmazing} className="emotionBtn1">Amazing</button>
            </div>
            <div className="amazingGroup">
              <img className="heartEyes" src={EmojiFour}/>
              <button onClick={handleOkay} className="emotionBtn1">Okay</button>
            </div>
            <div className="amazingGroup">
              <img className="heartEyes" src={EmojiThree}/>
              <button onClick={handleBad} className="emotionBtn1">Bad</button>
            </div>
            <div className="amazingGroup">
              <img className="heartEyes" src={EmojiTwo}/>
              <button onClick={handleHelp} className="emotionBtn1">I need help</button>
            </div>
            <div className="amazingGroup">
              <img className="heartEyes" src={EmojiOne}/>
              <button onClick={handleLack} className="emotionBtn1">Lack of motivation</button>
            </div>
            
          </div>
        </div>
      </Row>
    </Container>
  );
}
