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
          Today was an extraordinary day, one that overflowed with joy and warmth, leaving me brimming with an indescribable happiness. The sun cast its golden rays upon the world, illuminating every corner with a gentle glow. As I strolled along the winding path through the park, a symphony of birds serenaded me, their melodious tunes lifting my spirits higher with every note. Nature seemed to be celebrating alongside me, as vibrant blossoms adorned the trees, their delicate petals dancing in the soft breeze. The infectious laughter of children echoed through the air, filling my heart with pure delight. In the company of dear friends, laughter erupted effortlessly, weaving an invisible tapestry of connection and love. Each moment felt like a precious gem, cherished and etched in my memory forever. Gratitude washed over me, like a soothing wave, as I realized how fortunate I am to experience such profound happiness. With a heart overflowing with joy, I pen down these words, hoping to capture and preserve this feeling, knowing that it will continue to inspire me in the days to come.
          </p>
        </div>
      </div>
    </div>
  );
}
