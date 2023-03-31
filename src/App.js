import { useState } from "react";
import { Routes , Route } from "react-router-dom";
import ChatPages from "./components/chatPages/ChatPages";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";


function App() {

  const [user , setUser] = useState(true);

  return (
    <div className="App">
      {
        user ? (
          <Routes>
            <Route path="/"  element={<Home/>}  />
            <Route path="/chatpage"  element={<ChatPages/>} />
          </Routes>
        ) : (
          <Login setUser={setUser} />
        )
      }
    </div>
  );
}

export default App;
