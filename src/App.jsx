import './App.css'
import Login from './components/Login';
import Body from './components/Body'
import { BrowserRouter,Routes, Route } from "react-router";
import Profile from './components/Profile';
import appStore from './utils/appStore';
import { Provider } from 'react-redux'
import Feed from './components/Feed';
import Connections from './components/Connections';
import Requests from './components/Requests';
import Premium from './components/Premium';

function App() {
  return (
    <>
    <Provider store={appStore}>
     <BrowserRouter basename='/'>
    
      <Routes>
        <Route path='/' element={<Body/>}>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/feed' element={<Feed/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/connections' element={<Connections/>}></Route>
          <Route path='/requests' element={<Requests/>}></Route>
          <Route path='/premium' element={<Premium/>}></Route>
        </Route>
      </Routes>
     
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
