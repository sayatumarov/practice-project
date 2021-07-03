import './App.css';
import Header from './components/DefaultComponents/Header/Header';
import Navbar from './components/DefaultComponents/NavBar/Navbar';
import MainPage from './components/MainPage/MainPage';

function App(props) {
  return (
    <div className="App">
      <Header />
      <main>
        <Navbar />
        <MainPage store={props.store}/>
      </main>
    </div>
  );
}

export default App;
