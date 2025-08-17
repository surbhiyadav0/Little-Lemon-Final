import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Menu from './Menu';
import Specials from './Specials';
import About from './About';
import BookingForm from './BookingForm';
import Footer from './Footer';
import './LittleLemon.css';

function LittleLemon() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  const updateTimes = (date) => {
    if (date.getDay() === 0) { // Sunday
      setAvailableTimes(['17:00', '18:00', '19:00']);
    } else if (date.getDay() === 6) { // Saturday
      setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']);
    } else {
      setAvailableTimes(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    }
  };

  return (
    <div className="little-lemon-app">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Specials />
        <About />
        <section className="booking-section" aria-labelledby="booking-title">
          <div className="container">
            <h2 id="booking-title">Make a Reservation</h2>
            <BookingForm 
              availableTimes={availableTimes}
              updateTimes={updateTimes}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LittleLemon;
