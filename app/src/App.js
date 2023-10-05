import './App.css';
import Header from './components/Header/Header';
import RoutesComp from './components/RoutesComp';
import { ContextProvider } from './context/context';


function App() {


  return (
    <ContextProvider>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <main>
          <RoutesComp />
        </main>

      </div>
    </ContextProvider>
  );
}

export default App;
