import logo from './logo.svg';
import './App.css';
import myphoto from './img/kevin.jpg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myphoto}  style = {{width:"45%",height:"45%"}} alt = "my photo"/>
        <p>
          <div>Kevin</div>
          <div>Good Luck !!!</div>
        </p>

      </header>
    </div>
  );
}

export default App;
