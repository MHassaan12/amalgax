import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from "./Layouts/Admin";
import Home from "./Layouts/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import HomePage from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";
import Payment from "./Pages/Payment/Payment";
import Users from "./Pages/Dashboard/AllUsers";
import Packages from './Pages/Packages/Packages';
import PaymentRequest from './Pages/Payment/PaymentRequest';
import DepositUsers from './Pages/Dashboard/DepositUser';
import RefundUsers from './Pages/Dashboard/RefundUsers';
import History from './Pages/Dashboard/History';
import Team from './Pages/Dashboard/Team';
import useAuth from './Hooks/useAuth';
import Profile from './Pages/Dashboard/Profile';

function App() {
  const { loading } = useAuth();
  return loading ? ('loadin....') : (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<HomePage />} />
        <Route path="payment" element={<Payment />} />
        <Route path="payment/request" element={<PaymentRequest />} />
        <Route path="packages" element={<Packages />} />
      </Route>
      <Route path="/dashboard" element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="profile" element={<Profile />} />
        <Route path="history" element={<History />} />
        <Route path="team" element={<Team />} />
        <Route path="depositUsers" element={<DepositUsers />} />
        <Route path="refundUsers" element={<RefundUsers />} />
      </Route>
      <Route path="/login" element={<Signin />} />
      <Route path="/register" element={<Signup />} />

    </Routes>
  );
}

export default App;
