import '../AffirmationsPage/Affirmations.css'
import { FetchQuotes, FetchALLQuotes } from "../../Service/DataService";
import NavbarComponent from "../Navbar/NavbarComponent";
import { useState } from "react";
import { Dropdown, DropdownButton, Container } from "react-bootstrap";

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

  quotesData();
}
quotes();
function AffirmationsComponent() {
  return (
    <div>
      <NavbarComponent />
      <Container className="affContainer">
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
     </Container>
      <p>Affirmations</p>
    </div>
  );
}

export default AffirmationsComponent;
