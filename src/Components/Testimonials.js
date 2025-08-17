import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      review: 'The Greek salad was absolutely delicious! Fresh ingredients and perfect seasoning.',
      image: '/avatar1.jpg'
    },
    {
      id: 2,
      name: 'Michael R.',
      rating: 5,
      review: 'Amazing Mediterranean flavors. The bruschetta is a must-try appetizer.',
      image: '/avatar2.jpg'
    },
    {
      id: 3,
      name: 'Emily L.',
      rating: 5,
      review: 'Cozy atmosphere and friendly staff. The lemon dessert was the perfect ending to our meal.',
      image: '/avatar3.jpg'
    },
    {
      id: 4,
      name: 'David K.',
      rating: 5,
      review: 'Authentic Mediterranean cuisine. We\'ll definitely be coming back for more!',
      image: '/avatar4.jpg'
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title">What our customers say!</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <article key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name}'s profile picture`}
                  width="60"
                  height="60"
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <div className="rating" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <blockquote>
                <p>{testimonial.review}</p>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
