import '../AffirmationsPage/Affirmations.css'
import { FetchQuotes, FetchALLQuotes } from "../../Service/DataService";
import NavbarComponent from "../Navbar/NavbarComponent";
import { useState } from "react";
import { Dropdown, DropdownButton, Container } from "react-bootstrap";
import { Card } from 'react-bootstrap';

function quotes() {
  // const [categorys, setCategories] = useState('');
  // const [allQuotes, setAllQuotes] = useState('');

  async function quotesData() {
    let quotesFetch = await FetchALLQuotes();
    let categoriesFetch = await FetchQuotes();
    // console.log(quotesFetch);
    console.log(categoriesFetch);

    // setAllQuotes(quotesFetch);
    // setAdviceNum(adviceFetch.slip.id)
  }
  
 
}

function displayAllQuotes() {
  <Card>
    <Card.Body>This is some text within a card body.</Card.Body>
  </Card>
  }

function AffirmationsComponent() {
  return (
    <div>
      <NavbarComponent />
      <div className='bg'>
      <Container className="affContainer">
        <div className='aff-dropdown'>
        <select className='custom-select dropdown2' id="dropdown-basic-button" title="Dropdown button">
          <option value='All Affirmations'><div >All Affirmations</div></option>
          <option value="Motivational">Motivational</option>
          <option value="Relatioship">Relationship</option>
          <option value="Self Worth">Self Worth</option>
          <option value="Depression">Depression</option>
          <option value="Anxiety">Anxiety</option>
          <option value="Spiritual">Spiritual</option>
        </select>
        </div>
      </Container>
      </div>
    </div>
  );
}

export default AffirmationsComponent;
