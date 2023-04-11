let userLoginData = {};


async function FetchQuotes() {
    const response = await fetch("https://backendquotesapi.azurewebsites.net/allaffirmations/getquote/")
      return await response.json();
  }

  async function FetchALLQuotes() {
    const response = await fetch("https://backendquotesapi.azurewebsites.net/allaffirmations/getallquotes")
      return await response.json();
  }

  async function loginFetch(loginUser: any){
    const res = await fetch(
      "https://serenitybackendsite.azurewebsites.net/User/Login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(loginUser)
      }
    );
  
    if(!res.ok){
      const message = `An Error occured ${res.status}`;
      throw new Error(message);
    }
    let data = await  res.json();
    console.log(data);
    return data;
  }

  async function GetLoggedInUserData(email:any){
    let res = await fetch(`https://serenitybackendsite.azurewebsites.net/user/userbyusername/${email}`);
    let data = await res.json();
    userLoginData = data;
    console.log(userLoginData);
    
  }

  
  
export {FetchQuotes, FetchALLQuotes, loginFetch, GetLoggedInUserData} 