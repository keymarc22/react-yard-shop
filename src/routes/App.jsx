import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import { Home } from '@pages/Home';
import Login from '@pages/Login';
import RecoveryPassword from '@pages/RecoveryPassword';
import NewAccount from '@pages/NewAccount';
import SentEmail from '@pages/SentEmail';
import { Account } from '@pages/Account';
import { Order } from '@pages/Order';
import { MyOrders } from '@pages/MyOrders';
import NotFound from '@pages/NotFound';
import '@styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/recovery-password" element={<RecoveryPassword />} />
          <Route exact path="/newaccount" element={<NewAccount />} />
          <Route exact path="/sentemail" element={<SentEmail />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/myorders" element={<MyOrders />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;