import React, { useEffect, useState } from 'react';

export default function Menu() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then(r => r.json())
      .then(data => {
        console.log("Fetched menu data:", data);
        setItems(data);
        setLoading(false);
      })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      {loading ? (
        <p>Loading menu...</p>
      ) : (
        <div className="grid">
          {items.map((it, i) => (
            <div className="card" key={i}>
              {it.image && (
                <img
                  src={`http://localhost:5000${it.image}`}
                  alt={it.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              )}
              <h3>{it.name}</h3>
              {it.description && <p className="muted">{it.description}</p>}
              <div className="price">₹{it.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
