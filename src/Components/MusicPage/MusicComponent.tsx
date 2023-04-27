import React from 'react';
import NavbarComponent from '../Navbar/NavbarComponent';
import '../MusicPage/MusicStyles.css';
import { Container, Row } from 'react-bootstrap';
import { Spotify } from 'react-spotify-embed';

type Props = {}

export default function MusicComponent({}: Props) {
  return (
    <div>
        <NavbarComponent/>
        <Container className='musicContainer'>
            <Row className='musicRow'>
                <Spotify className='spotify' link="https://open.spotify.com/playlist/0OhNLmmaLTeczyBNpznQyN?si=908a5326495c4c68&nd=1" />
                <Spotify className='spotify' link="https://open.spotify.com/playlist/0OhNLmmaLTeczyBNpznQyN?si=908a5326495c4c68&nd=1" />
            </Row>
            <Row className='musicRow'>
                <Spotify className='spotify' link="https://open.spotify.com/playlist/0OhNLmmaLTeczyBNpznQyN?si=908a5326495c4c68&nd=1" />
                <Spotify className='spotify' link="https://open.spotify.com/playlist/0OhNLmmaLTeczyBNpznQyN?si=908a5326495c4c68&nd=1" />
            </Row>
        </Container>
    </div>
  )
}