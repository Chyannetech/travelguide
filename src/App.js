import SearchFilter from "./components/SearchFilter";
import SearchData from "./Data.json"
import "./App.css"

function App() {
  return (
    <div className="App">
      <SearchFilter placeholder="Enter your city..." data={SearchData}/>
    </div>
  );
}

export default App;
