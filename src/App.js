
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import ManageInventory from './component/ManageInventory/ManageInventory'
import MyItem from './component/MyItem/MyItem'
import Error404 from './component/Error404/Error404';
import AddInventory from './component/AddInventory/AddInventory';
import Footer from './component/Footer/Footer';
import AboutUs from './component/AboutUs/AboutUs';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>


        <Route path='/inventory/:id' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>

        <Route path='/manageinvetory' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>

        <Route path='/addinvetory' element={<RequireAuth>
          <AddInventory></AddInventory>
        </RequireAuth>}></Route>


        <Route path='/myitem' element={<RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>}></Route>



        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>


        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
