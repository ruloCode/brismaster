import logo from "./logo.svg";
import paypal from "./paypal.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>We are creating OCAAT</p>
        <a
          className="donate-btn"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Donate with</span>
          <img src={paypal} className="paypal-logo" alt="logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
