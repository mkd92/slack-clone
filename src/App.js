import Header from "./Header";

import Sidebar from "./Sidebar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
