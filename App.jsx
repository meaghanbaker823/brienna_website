import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Media from './pages/Media';
import OnStage from './pages/OnStage';
import OffStage from './pages/OffStage';
import ContactMe from './pages/ContactMe';

// This is where components on every page should go
// Header and Footer for sure (anything on the side in the future)

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<OnStage />} path="/on-stage" />
        <Route element={<OffStage />} path="/off-stage" />
        <Route element={<Media />} path="/media" />
        <Route element={<ContactMe />} path="/contact-me" />
      </Routes>
      <Footer />
      <div style={{ backgroundColor: '#401257', paddingBottom: '50px' }} />
    </div>
  );
}
