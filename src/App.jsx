import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import FormPage from './pages/FormPage';

export default function App() {
  return (
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/add-product" element={<FormPage />} />
      </Routes>
    </Router>
  );
}
