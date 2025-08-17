import React from 'react';
import './Specials.css';

function Specials() {
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: '/greek-salad.jpg'
    },
    {
      id: 2,
      name: 'Bruschetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: '/bruschetta.jpg'
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: '/lemon-dessert.jpg'
    }
  ];

  return (
    <section className="specials" aria-labelledby="specials-title">
      <div className="container">
        <header className="specials-header">
          <h2 id="specials-title">This Week's Specials!</h2>
          <button className="online-menu-btn" aria-label="View online menu">
            Online Menu
          </button>
        </header>
        
        <div className="specials-grid">
          {specials.map(special => (
            <article key={special.id} className="special-card">
              <div className="special-image">
                <img 
                  src={special.image} 
                  alt={special.name}
                  width="300"
                  height="200"
                />
              </div>
              <div className="special-content">
                <header className="special-header">
                  <h3>{special.name}</h3>
                  <span className="price">{special.price}</span>
                </header>
                <p>{special.description}</p>
                <button className="order-delivery-btn" aria-label={`Order ${special.name} for delivery`}>
                  Order a delivery
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
