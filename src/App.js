
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import ManageInventory from './component/ManageInventory/ManageInventory'
import MyItem from './component/MyItem/MyItem'
import Error404 from './Error404/Error404';

function App() {
  return (
    <div>
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/manageinvetory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/myitem' element={<MyItem></MyItem>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>

    </div>
  );
}

export default App;
