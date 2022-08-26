// import logo from './logo.svg';
import './App.css';
import ServicesCard from './component/services';
import serviceData from './component/serviceData';
function App() {
  let data= serviceData.map((elem)=>{
    return(<ServicesCard key={elem.id} {...elem}/>);
  })
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='text-center'>Logo</h2>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <main className='App-body'>
        <div className="App-service">
          {data}
        </div>
      </main>
    </div>
  );
}

export default App;
