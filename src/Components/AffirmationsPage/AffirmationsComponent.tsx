import React from 'react'
import { FetchQuotes, FetchALLQuotes } from '../../Service/DataService';
import NavbarComponent from '../Navbar/NavbarComponent';
import { useState } from 'react';

function quotes() {
  const [categorys, setCategories] = useState('');
  const [allQuotes, setAllQuotes] = useState('');

  async function quotesData() {
    let quotesFetch = await FetchALLQuotes();
    console.log(quotesFetch);

    setAllQuotes(quotesFetch);
    // setAdviceNum(adviceFetch.slip.id)
  }
}

function AffirmationsComponent() {
  return (
    <div>

    </div>
  )
}

export default AffirmationsComponent