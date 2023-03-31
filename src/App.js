import { Routes , Route } from "react-router-dom";
import ChatPages from "./components/chatPages/ChatPages";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Home/>}  />
        <Route path="/chatpage"  element={<ChatPages/>} />
      </Routes>
    </div>
  );
}

export default App;
