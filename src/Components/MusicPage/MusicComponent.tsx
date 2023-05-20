
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
              <Spotify className='spotify' link="https://open.spotify.com/playlist/4xfMjAPVJ6mtWk5gxNnGEf?si=4db326f9c97e40c3"allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
               
                <Spotify className='spotify' link="https://open.spotify.com/playlist/2BYZVgmItmG1NOFo5CcEgP?si=da91c2ef87cb432f"allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"  />
            </Row>
            <Row className='musicRow'>
            
                <Spotify className='spotify' link="https://open.spotify.com/playlist/1hMB2xUs2KA6Xw5fS7eDo8?si=65152692918c454e" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
                 <Spotify className='spotify' link="https://open.spotify.com/playlist/3nRTHDWeEQjCmYImQ9JwcB?si=d2edb8c41c3f45b9" />
            </Row>
        </Container>
    </div>
  )
}