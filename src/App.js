import './App.css';
import myphoto from './img/kevin.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myphoto}  style = {{width:"50%",height:"50%"}} alt = "my photo"/>
        <p>
          <div>Kevin</div>
          <div>Good Luck in 2020 !!!</div>
        </p>

      </header>
    </div>
  );
}

export default App;
