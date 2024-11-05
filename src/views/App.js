import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/myComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from './example/Users/ListUser';
import Nav from './Nav/Nav';
import Home from './example/Home';
import DetailUser from './example/Users/DetailUser';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm Quyền hí hí
        </p>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/todo">
            <ListTodo/>
          </Route>

          <Route path="/about">
            <MyComponent/>
          </Route>

          <Route path="/user"  exact  >
            <ListUser/>
          </Route>
          <Route path="/user/:id">
            <DetailUser/>
          </Route>
        </Switch>
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
      />
    </div>
    </BrowserRouter>
  );
}

export default App;
