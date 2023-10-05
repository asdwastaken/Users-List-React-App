import './App.css';
import Header from './components/Header/Header';
import RoutesComp from './components/RoutesComp';
import { ContextProvider } from './context/context';


function App() {


  return (
    <ContextProvider>
      <div className="App" >
        <main>
          <RoutesComp />
        </main>
      </div>
    </ContextProvider>
  );
}

export default App;
