import logo from './logo.svg';
import './App.css';
import TxnList from './components/TxnList';

const App = props =>  (
  <main className="app">
    <h1>{props.title}</h1>
    <TxnList />
  </main>   
);

export default App;
