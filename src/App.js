//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import Login from './components/Login';
//import Login from './components/login';
import Home from './components/Home';
import Regester from './components/Regester';
import Navbar from './components/Navbar';
import Explore from './components/Explore';
import Fertilizers from './components/Fertilizers';
import Bulbfoodpayment from './components/Bulbfoodpayment';
import PaymentSucess from './components/PaymentSucess';
import Acidmix from './components/Acidmix';
import Login2 from './components/Login2';
import Register from './components/Register';
import Contact from './components/Contact';
import Select from './components/Select';
import Suc2 from './components/Suc2';
import OrgFertilizers from './components/OrgFertilizers';
import EkaluxPayment from './components/EkaluxPayment';
import ChessPayment from './components/ChessPayment';
import Vermipay from './components/Vermipay';
import Liqpay from './components/Liqpay';
import Anmpay from './components/Anmpay';
function App() {
  return (
    <>
    
      
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Regester />} />
        <Route path="/login" element={<login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/fert" element={<Fertilizers />} />
        <Route path="/bulbpayment" element={<Bulbfoodpayment />} />
        <Route path="/paysuc" element={<PaymentSucess />} />
        <Route path="/acidmix" element={<Acidmix />} />
        <Route path="/" element={<Login2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/select" element={<Select />} />
        <Route path="/suc2" element={<Suc2 />} />
        <Route path="/orgfert" element={<OrgFertilizers />} />
        <Route path="/ekapay" element={<EkaluxPayment />} />
        <Route path="/chesspay" element={<ChessPayment />} />
        <Route path="/vermipay" element={<Vermipay />} />
        <Route path="/liqpay" element={<Liqpay />} />
        <Route path="/anmpay" element={<Anmpay />} />
      </Routes>
    </>
  );
}

export default App;
