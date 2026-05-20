import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function ProductPage() {
  const { data: products, loading, refetch } = useFetch('http://localhost:5000/products');
  const [search, setSearch] = useState('');

  const handleUpdatePrice = (id, currentPrice) => {
    const newPrice = prompt("Enter new price:", currentPrice);
    if (!newPrice || isNaN(newPrice)) return;

    fetch(`http://localhost:5000/products/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: Number(newPrice) })
    }).then(() => refetch());
  };

  const handleDelete = (id) => {
    if (!confirm("Delete this product?")) return;
    fetch(`http://localhost:5000/products/${id}`, { method: 'DELETE' })
      .then(() => refetch());
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div style={{ padding: '2rem' }}>Loading products...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Product Inventory Dashboard</h2>
      <input 
        type="text" 
        placeholder="Search products dynamically..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '1.5rem', padding: '0.5rem', width: '100%', maxWidth: '300px', display: 'block' }}
      />
      <div>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '5px' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button onClick={() => handleUpdatePrice(product.id, product.price)} style={{ marginRight: '10px' }}>Edit Price</button>
            <button onClick={() => handleDelete(product.id)} style={{ color: 'red' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
