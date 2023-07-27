import logo from "./league-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Get activity recommendations based on search query</p>
        <input placeholder="Ask about any health related question ?" id="searchWidgetTrigger" />
      </header>
    </div>
  );
}

export default App;
