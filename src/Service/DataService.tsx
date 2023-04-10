async function FetchQuotes() {
    const response = await fetch("https://backendquotesapi.azurewebsites.net/allaffirmations/getquote/")
      return await response.json();
  }

  async function FetchALLQuotes() {
    const response = await fetch("https://backendquotesapi.azurewebsites.net/allaffirmations/getallquotes")
      return await response.json();
  }
  
export {FetchQuotes, FetchALLQuotes} 