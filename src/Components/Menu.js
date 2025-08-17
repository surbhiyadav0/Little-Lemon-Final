import React from 'react';
import './Menu.css';

function Menu() {
  const menuCategories = [
    {
      id: 1,
      name: 'Starters',
      items: [
        { name: 'Bruschetta', price: '$5.99', description: 'Grilled bread with garlic, olive oil, and fresh tomatoes' },
        { name: 'Greek Salad', price: '$8.99', description: 'Fresh lettuce, cucumbers, olives, and feta cheese' },
        { name: 'Hummus', price: '$6.99', description: 'Chickpea dip with tahini, lemon, and olive oil' }
      ]
    },
    {
      id: 2,
      name: 'Main Courses',
      items: [
        { name: 'Grilled Salmon', price: '$24.99', description: 'Atlantic salmon with Mediterranean herbs and lemon' },
        { name: 'Lamb Kebabs', price: '$22.99', description: 'Tender lamb with aromatic spices and grilled vegetables' },
        { name: 'Vegetarian Moussaka', price: '$18.99', description: 'Layers of eggplant, potatoes, and béchamel sauce' }
      ]
    },
    {
      id: 3,
      name: 'Desserts',
      items: [
        { name: 'Lemon Cake', price: '$7.99', description: 'Homemade lemon cake with citrus glaze' },
        { name: 'Baklava', price: '$8.99', description: 'Layered pastry with honey and chopped nuts' },
        { name: 'Greek Yogurt', price: '$6.99', description: 'Creamy yogurt with honey and fresh berries' }
      ]
    }
  ];

  return (
    <section className="menu-section" aria-labelledby="menu-title">
      <div className="container">
        <header className="menu-header">
          <h2 id="menu-title">Our Menu</h2>
          <p>Discover our authentic Mediterranean flavors</p>
        </header>
        
        <div className="menu-categories">
          {menuCategories.map(category => (
            <div key={category.id} className="menu-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="menu-items">
                {category.items.map((item, index) => (
                  <article key={index} className="menu-item">
                    <div className="menu-item-header">
                      <h4 className="item-name">{item.name}</h4>
                      <span className="item-price">{item.price}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="menu-cta">
          <button className="view-full-menu-btn">View Full Menu</button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
