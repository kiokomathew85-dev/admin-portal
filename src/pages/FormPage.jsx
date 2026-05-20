import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormPage() {
  const [form, setForm] = useState({ name: '', price: '', description: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, price: Number(form.price) })
    }).then(() => navigate('/products'));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input type="text" placeholder="Product Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        <input type="number" placeholder="Price" required value={form.price} onChange={e => setForm({...form, price: e.target.value})} />
        <textarea placeholder="Description" required value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
        <button type="submit" style={{ padding: '0.5rem', background: '#27ae60', color: 'white', border: 'none', cursor: 'pointer' }}>Save Product</button>
      </form>
    </div>
  );
}
