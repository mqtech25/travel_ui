// import logo from './logo.svg';
import './App.css';
import ServicesCard from './component/services';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='text-center'>Logo</h2>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <main className='App-body'>
        <ServicesCard/>
      </main>
    </div>
  );
}

export default App;
