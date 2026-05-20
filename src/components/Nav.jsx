import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav style={{ 
      padding: '1rem', 
      display: 'flex', 
      gap: '1.5rem', 
      background: '#2c3e50', 
      color: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      <Link to="/products" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Manage Products</Link>
      <Link to="/add-product" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Add New Product</Link>
    </nav>
  );
}
