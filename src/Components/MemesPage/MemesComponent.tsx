import React from "react";
import NavbarComponent from '../Navbar/NavbarComponent';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import '../MemesPage/memeStyles.css';
import BookM from '../../Assets/derpCat.jpg';

type Props = {}

interface Item {
    id: number;
    setUp: string;
    pun: string;
  }

export default function MemesComponent({}: Props) {

    const [joke, setJoke] = useState("Get a joke and a funny picture!");

    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        async function fetchItems() {
          const response = await fetch('/data/jokes.json');
          const data = await response.json();
          console.log(data);
        //   setItems(data.setUpJokes);
        }
        fetchItems();
      }, []);
      
    function handleRandom() {
        const random = Math.floor(Math.random() * 36) + 1;
        setRandomNumber(random);
        console.log(random);

    }

  return (
    <div className="divIdk">
        <NavbarComponent/>
        <Container className='memeContainer'>
            <Row className="memeRow">
                <Col className="memePicCol">
                    <img className="memePic" src={BookM} />
                </Col>
                <Col className="memeJokeCol">
                    <p className="joke">{joke}</p>
                    <Button className="memeBtn" onClick={handleRandom}>Re-Roll Meme</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}