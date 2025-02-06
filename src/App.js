import { useState } from "react";
function App() {
  const [userQuery, setUserQuery] = useState("");

  const SearchQuery = () => {
    //window.open redirects a user to a new window
    //_blank ensures a new window is opened
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  //will allow for a user to press enter to make a search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      SearchQuery();
    }
  };

  const updateUserQuery = (e) => {
    console.log("user query is", userQuery);
    setUserQuery(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello Jemmy</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyDown={handleKeyDown}
        />
        <button onClick={SearchQuery}>Search</button>
      </div>
    </div>
  );
}

export default App;
