import './App.css';
import './components/assets/css/style.css';
import Timer from './components/Timer.jsx'

function App() {
  return (
    <div className="App">
       <Timer time='180' step='1' autostart={false} />
      <Timer time='700' step='2' autostart={true} />
    </div>
  );
}

export default App;
