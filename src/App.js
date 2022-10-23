import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chat from "./components/chat/Chat";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/room/:roomId" element={<Chat />} />
            <Route path="/" element={<h1>WELCOME</h1>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
