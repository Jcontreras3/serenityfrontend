import React from "react";
import { Container, Row } from "react-bootstrap";
import "./journalStyles.css";

export default function JournalPageComponent() {
  return (
    <div className="paperBox">
      <div className="journalTitleGroup">
        <div className="redLine"></div>
        <p className="titleTxt">Today's Journal Entry</p>
      </div>

      <div className="JournalGroup">
        <div className="journalTxtGroup">
          <p className="journalTxt">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem exercitationem ad distinctio sed ratione ullam, obcaecati nulla aperiam magnam aliquid cum expedita a quasi quae dolor, delectus possimus. Voluptas?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur facilis tempora, consequatur expedita cupiditate fugit, ab laboriosam non repellendus possimus aliquam distinctio ipsa quis aperiam natus, voluptas quisquam a at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse optio perferendis unde voluptatum reprehenderit in mollitia assumenda ullam ducimus dolor? Ratione aliquam reiciendis vel dolore quas consequuntur maxime ea at!
          </p>
        </div>
      </div>
    </div>
  );
}
