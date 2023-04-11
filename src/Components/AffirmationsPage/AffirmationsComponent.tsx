
import { FetchQuotes, FetchALLQuotes } from "../../Service/DataService";
import NavbarComponent from "../Navbar/NavbarComponent";
import { useState } from "react";

function quotes() {
  // const [categorys, setCategories] = useState('');
  // const [allQuotes, setAllQuotes] = useState('');

  async function quotesData() {
    let quotesFetch = await FetchALLQuotes();
    let categoriesFetch = await FetchQuotes();
    console.log(quotesFetch);
    console.log(categoriesFetch.motivational);

    // setAllQuotes(quotesFetch);
    // setAdviceNum(adviceFetch.slip.id)
  }

  quotesData();
}

function AffirmationsComponent() {
  return (
    <div>
      <NavbarComponent />

      <p>Affirmations</p>
    </div>
  );
}

export default AffirmationsComponent;
