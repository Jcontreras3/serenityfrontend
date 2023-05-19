import '../AffirmationsPage/Affirmations.css'
import NavbarComponent from "../Navbar/NavbarComponent";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ItemList } from './AllQuotesCards';
import { MotivationalList } from './MotivationalCards';
import { RelationshipList } from './RelationshipComponent';
import { SelfWorthList } from './SelfWorthList';
import { DepressionList } from './DepressionCards';
import { AnxietyList } from './AnxietyCards';
import { SpiritualList } from './SpiritualCards';
import { FavoriteList } from './FavoritesComponent';


function DropdownComponent() {
  const [selectedOption, setSelectedOption] = useState('All Affirmations');

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  }
  return (
    <div >
      <label htmlFor="dropdown"></label>
      <select className='custom-select dropdown2' id="dropdown-basic-button" title="Dropdown button" onChange={handleDropdownChange}>
        <option value='All Affirmations'>All Affirmations</option>
        <option value="Motivational">Motivational</option>
        <option value="Relatioship">Relationship</option>
        <option value="Self Worth">Self Worth</option>
        <option value="Depression">Depression</option>
        <option value="Anxiety">Anxiety</option>
        <option value="Spiritual">Spiritual</option>
        <option value="Favorites">Favorites</option>
      </select>
      {selectedOption === 'All Affirmations' && <Component1 />}
      {selectedOption === 'Motivational' && <Component2 />}
      {selectedOption === 'Relatioship' && <Component3 />}
      {selectedOption === 'Self Worth' && <Component4 />}
      {selectedOption === 'Depression' && <Component5 />}
      {selectedOption === 'Anxiety' && <Component6 />}
      {selectedOption === 'Spiritual' && <Component7 />}
      {selectedOption === 'Favorites' && <Component8/>}
    </div>
  );
}

function Component1() {
  return <div > <ItemList /> </div>;
}

function Component2() {
  return <div><MotivationalList /></div>;
}

function Component3() {
  return <div><RelationshipList /></div>;
}

function Component4() {
  return <div><SelfWorthList /></div>;
}

function Component5() {
  return <div><DepressionList /></div>;
}

function Component6() {
  return <div><AnxietyList /></div>;
}

function Component7() {
  return <div><SpiritualList /></div>;
}

function Component8(){
  return <div><FavoriteList /></div>
}




function AffirmationsComponent() {


  return (
    <div>
      <NavbarComponent />
      <div className='bg'>
        <Container>
        <Row className='aff-row'>
           <DropdownComponent />
        </Row>
        </Container>
       
      </div>
    </div>
  );
}

export { AffirmationsComponent, DropdownComponent };
