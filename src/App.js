import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,NavLink, Routes} from 'react-router-dom'
import HomePage from './pages/homePage';
import DepositPage from './pages/depositPage';
import WithdrawPage from './pages/withdrawPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <ul className='ul-style'>
        <li className='li-style'><NavLink className="App-link" to='/'>Home</NavLink></li>
        <li className='li-style'><NavLink className="App-link" to='/deposit'>Deposit</NavLink></li>
        <li className='li-style'><NavLink className="App-link" to='/withdraw'>Withdraw</NavLink></li>
       </ul>
       <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/deposit' element={<DepositPage/>}/>
        <Route path='/withdraw' element={<WithdrawPage/>}/>
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
