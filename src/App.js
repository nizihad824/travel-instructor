
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import ServiceDetail from './components/Home/ServiceDetail/ServiceDetail';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import SignIn from './components/Login/SignIn/SignIn';
import SignUp from './components/Login/SignUp/SignUp';
import Footer from './components/Shared/Footer/Footer';


import Header from './components/Shared/Header/Header';
import NotFound from './components/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
     <Route
      path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/blog" element={<Blogs></Blogs>}></Route>
      <Route path="/signin" element={<SignIn></SignIn>}></Route>

      <Route path="/signup" element={<SignUp></SignUp>}></Route>


      <Route path='/service/:serviceId' element={<RequireAuth>
        <ServiceDetail></ServiceDetail>
      </RequireAuth>}
      
      ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

     

     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
