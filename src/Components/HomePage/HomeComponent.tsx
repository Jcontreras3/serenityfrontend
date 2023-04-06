import React from 'react';
import NavbarComponent from '../Navbar/NavbarComponent';
import { Container, Row, Col,Button } from "react-bootstrap";
import '../HomePage/Home.css';
import '../HomePage/Calendar2.css';
import Calendar from 'react-calendar';

type Props = {}

export default function HomeComponent({}: Props) {
  return (
    <div>
        <NavbarComponent/>
        <Container className='homeContainer'>
            <Row>
                <Col className='calendar'>
                    <Calendar/>
                </Col>
            </Row>
            <Row>
                <Col className='calendar'>
                    <div className='quoteDiv'>
                        <h2>Quote of the day</h2>
                        <br/>
                        <h2 className='quote'>odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum</h2>
                        <div className='journalEntryDiv'>
                            <Button className='journalEntryBtn'>Journal Entry</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}