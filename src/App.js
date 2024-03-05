import logo from './logo.svg';
// import './App.css';
import RoutePages from './Components/RoutePages';
import { Provider } from 'react-redux';
import { ReduxStore } from './Redux/ReduxStore';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Provider store={ReduxStore}>
      <RoutePages/>
      </Provider>
    </div>
  );
}

export default App;
