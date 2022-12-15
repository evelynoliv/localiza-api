import CityDetails from "./components/CityDetails/CityDetails";
import SelectState from "./components/SelectState/SelectState";
import SelectTown from "./components/SelectTown/SelectTown";
import menino from "./assets/images/menino.png"
import "./App.css";


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
    </div>
  );
}

export default App;
