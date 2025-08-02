import './App.css'
import Login from './Login';
import Body from './Body'
import { BrowserRouter,Routes, Route } from "react-router";
import Profile from './Profile';
function App() {
  return (
    <>
     <BrowserRouter basename='/'>
    
      <Routes>
        <Route path='/' element={<Body/>}>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Route>
        <Route path='/login' element={<div>login page</div>}></Route>
      </Routes>
     
    </BrowserRouter>
  
    </>
  )
}

export default App
