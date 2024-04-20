import React from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/LandingPage/Navbar';
import LoginPage from './Components/LandingPage/LoginPage';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './Components/LandingPage/Dashboard';

const App = () => {
  const title = 'Boost Your Business Relationships with Our CRM Solution';
  const description =
    'Welcome to our CRM solution designed to streamline your wholesale management and customer relationships.';
  const features = [
    {
      title: 'Manage Wholesale Partners',
      description:
        'Easily manage your wholesale partners in one place. Assign tasks, track progress, and communicate effortlessly.',
    },
    {
      title: 'Track Retail Customer Interactions',
      description:
        'Keep track of your interactions with retail customers. Monitor orders, payments, and communications effortlessly.',
    },
    {
      title: 'Customize Your Dashboard',
      description:
        'Tailor your dashboard to fit your needs. Get a clear view of your sales, leads, and customer data all in one place.',
    },
  ];
  const ctaText = 'Ready to Simplify Your Business Operations?';

  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              title={title}
              description={description}
              features={features}
              ctaText={ctaText}
            />
          }></Route>
        <Route Component={LoginPage} path="/login"/>
        <Route Component={Dashboard} path="/dashboard"/>
      </Routes>

    </div>
  );
};

export default App;
