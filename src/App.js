import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import CheckDetails from './components/CheckDetails/CheckDetails';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import Overview from './components/OverView/Overview';
import Permission from './components/Permission/Permission';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import Skill from './components/Skill/Skill';

function App() {
  return (
    <div>
       <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/overview' element={<Overview></Overview>}></Route>
        <Route path ='/skill' element={<Skill></Skill>}></Route>
        <Route path='/checkout/:checkoutId' element={<CheckDetails></CheckDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signIn' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/permission' element={<RequireAuth><Permission></Permission></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
