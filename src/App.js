import './App.css';
import Card from './components/Card';
import Search from './components/Search';

function App() {
  return (
    <div className="App flex flex-col min-h-screen justify-center items-center">
        <Search />
        <Card />
    </div>
  );
}

export default App;
