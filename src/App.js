import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import NationalEnquirer from './pages/NationalEnquirer';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import NotFound from './pages/404NotFound';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen anim_gradient' id='home'>
      <Header />
      <Routes>
        <Route path="/NationalEnquirer" element={<NationalEnquirer />} />
        <Route path="/" element={
          <>
            <Banner />
            {/* <Nav /> */}
            <About />
            <Work />
            <Footer />
            <div className='h-[50px]'></div>
          </>
        } />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};

export default App;
