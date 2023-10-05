import './App.css';
import Header from './components/Header/Header';
import RoutesComp from './components/RoutesComp';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <main>
        <RoutesComp />
      </main>

    </div>
  );
}

export default App;
