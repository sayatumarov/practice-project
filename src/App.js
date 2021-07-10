import './App.css';
import Header from './components/DefaultComponents/Header/Header';
import Navbar from './components/DefaultComponents/NavBar/Navbar';
import MainPage from './components/MainPage/MainPage';
import { Route, Switch } from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs';
import Messages from './components/Dialogs/Messages/Messages';

function App(props) {
  return (
    <div className="App">
      <Header />
      <main>
        <Navbar />
        <Switch>
        <Route exact path='/' render={() => <MainPage store={props.store}/>}/>
        <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
        <Route path='/messages/:number' render={() => <Messages store={props.store} dispatch={props.dispatch} />}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
