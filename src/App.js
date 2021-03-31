// importing components
import SearchBar from './components/Header/SearchBar.js'; 
import List from './components/Body/List.js';


// importing styles
import './style/css/app.css';

function App() {
  return (
    <div className="app">
        <SearchBar />
        <List />
    </div>
  );
}

export default App;
