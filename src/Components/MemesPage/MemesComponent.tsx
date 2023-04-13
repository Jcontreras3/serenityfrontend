import React from "react";
import NavbarComponent from '../Navbar/NavbarComponent';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import '../MemesPage/memeStyles.css';
import BookM from '../../Assets/derpCat.jpg';
import Jokes from '../../Data/jokes.json';

type Props = {}

// interface Item {
//     id: number;
//     setUp: string;
//     pun: string;
//   }

export default function MemesComponent({}: Props) {

    const [joke, setJoke] = useState("Get a joke and a funny picture!");
    const [joke2, setJoke2] = useState("");
    const [pic, setPic] = useState(BookM);

    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    // const [items, setItems] = useState<Item[]>([]);

    // useEffect(() => {
    //     // async function fetchItems() {
    //     //   const response = await fetch(Jokes);
    //     //   const data = await response.json();
    //     //   console.log(data);
    //     // //   setItems(data.setUpJokes);
    //     // }
    //     // fetchItems();
    //   }, []);

    const data2 = Jokes;
    console.log(Jokes);

      
    function handleRandom() {
        const random = Math.floor(Math.random() * 36);
        setRandomNumber(random);
        console.log(random);

        setJoke(data2.setupJokes[random].setup);
        setJoke2(data2.setupJokes[random].pun);

        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response: Response) => response.json())
        .then((response: { message: string }) => {
          const url = response.message;
          console.log(url);
          setPic(url);
          console.log(pic)
        })
        .catch((err: Error) => console.error(err));
    }

  return (
    <div className="divIdk">
        <NavbarComponent/>
        <Container className='memeContainer'>
            <Row className="memeRow">
                <Col className="memePicCol">
                    <img className="memePic" src={pic} />
                    <Button className="memeBtn" onClick={handleRandom}>Re-Roll Meme</Button>
                </Col>
                <Col className="memeJokeCol">
                    <div className="joke">
                        <p className="jokey">{joke}</p>
                        <p className="jokey2">{joke2}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}