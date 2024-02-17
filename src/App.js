import SearchFilter from "./components/SearchFilter";
import SearchData from "./Data.json"

function App() {
  return (
    <div className="App">
      <SearchFilter placeholder="Enter a city..." data={SearchData}/>
    </div>
  );
}

export default App;
