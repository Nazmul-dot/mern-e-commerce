import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import SignIn from './components/login/SignIn';
import Navbar from './components/nav/Navbar';
import SignUp from './components/register/SignUp';
import axios from 'axios'
import PrdkPage from './components/products/PrdkPage';
import View from './components/viewPage/View';
import CartPage from './components/cart/CartPage';
import AddProduct from './components/addproduct/AddProduct';
import Logout2 from './components/Logout2';
import History from './components/customHistory/History';
import Payment from './components/Payment/Payment';
import HistCart from './components/customHistory/HistCart';
import HistoryPage from './components/AdminHistory/HistoryPage';
import AdmHisCart from './components/AdminHistory/AdmHisCart';
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/product'>
          <PrdkPage />
        </Route>
        <Route exact path='/addproduct'>
          <AddProduct />
        </Route>
        <Route exact path='/view'>
          <View />
        </Route>
        <Route exact path='/cartpage'>
          <CartPage />
        </Route>

        <Route exact path='/payment'>
          <Payment />
        </Route>

        <Route exact path='/adminhistory'>
          <HistoryPage />
        </Route>

        <Route exact path='/adminhistorycart'>
          <AdmHisCart />
        </Route>

        <Route exact path='/chistory'>
          <History />
        </Route>
        <Route exact path='/historycart'>
          <HistCart />
        </Route>
        <Route exact path='/login'>
          <SignIn />
        </Route>
        <Route exact path='/register'>
          <SignUp />
        </Route>
        <Route exact path='/logout2'>
          <Logout2 />
        </Route>

      </Switch>


    </>
  );
}

export default App;
