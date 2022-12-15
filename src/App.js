import CityDetails from "./components/CityDetails/CityDetails";
import SelectState from "./components/SelectState/SelectState";
import SelectTown from "./components/SelectTown/SelectTown";
import "./App.css";
import menino from "./assets/images/menino.png"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <h1>LOCALIZA IBGE</h1>
        <img src={menino} alt="menino" />
      </div>
      <div className="selects">
        <SelectState />
        <SelectTown />
      </div>
      <CityDetails />
      <Footer />
    </div>
  );
}

export default App;
