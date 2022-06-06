import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <div>
        <Home />
        <Login />
      </div>
    </div>
  );
}

export default App;
